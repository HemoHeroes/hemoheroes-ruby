require 'test_helper'

class DonatorsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @donator = donators(:one)
  end

  test "should get index" do
    get donators_url
    assert_response :success
  end

  test "should get new" do
    get new_donator_url
    assert_response :success
  end

  test "should create donator" do
    assert_difference('Donator.count') do
      post donators_url, params: { donator: { admin: @donator.admin, blood_type: @donator.blood_type, cep: @donator.cep, city: @donator.city, cpf: @donator.cpf, date_birth: @donator.date_birth, district: @donator.district, email: @donator.email, last_donation: @donator.last_donation, name: @donator.name, number: @donator.number, password: @donator.password, phone: @donator.phone, receive_notification: @donator.receive_notification, state: @donator.state, street: @donator.street } }
    end

    assert_redirected_to donator_url(Donator.last)
  end

  test "should show donator" do
    get donator_url(@donator)
    assert_response :success
  end

  test "should get edit" do
    get edit_donator_url(@donator)
    assert_response :success
  end

  test "should update donator" do
    patch donator_url(@donator), params: { donator: { admin: @donator.admin, blood_type: @donator.blood_type, cep: @donator.cep, city: @donator.city, cpf: @donator.cpf, date_birth: @donator.date_birth, district: @donator.district, email: @donator.email, last_donation: @donator.last_donation, name: @donator.name, number: @donator.number, password: @donator.password, phone: @donator.phone, receive_notification: @donator.receive_notification, state: @donator.state, street: @donator.street } }
    assert_redirected_to donator_url(@donator)
  end

  test "should destroy donator" do
    assert_difference('Donator.count', -1) do
      delete donator_url(@donator)
    end

    assert_redirected_to donators_url
  end
end
