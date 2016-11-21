ActiveAdmin.register UserBloodBank do


  index do
    id_column
    column :email
    column :name
    column :cnpj
    actions
  end

  form do |f|
    f.label "Ativar Banco"
    f.check_box :actived
    f.actions do
      f.action :submit
      f.action :submit, label: "Create Featured Product", url: "some_url_for_create(@product)"
      f.action :cancel, :wrapper_html => { :class => 'cancel'}
    end
  end

  controller do
    def update(options={}, &block)
      super do |success, failure|
        block.call(success, failure) if block
        failure.html { render :edit }
      end

      bank = UserBloodBank.find_by(id: params[:id])

      if bank.actived
        unless bank.has_active_key
          NotificationMailer.send_activation_email(bank).deliver_now
          bank.has_active_key = true
          bank.save!
        end
      end

    end
  end
  permit_params :name, :email, :cnpj, :password, :phone, :lat, :long, :address, :extension, :actived

end
