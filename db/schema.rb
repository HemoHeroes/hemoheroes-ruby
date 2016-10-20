# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20161020125558) do

  create_table "demand_blood_banks", force: :cascade do |t|
    t.integer  "a_positive"
    t.integer  "a_negative"
    t.integer  "b_positive"
    t.integer  "b_negative"
    t.integer  "ab_positive"
    t.integer  "ab_negative"
    t.integer  "o_positive"
    t.integer  "o_negative"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "user_blood_banks", force: :cascade do |t|
    t.string   "email",                  default: "",    null: false
    t.string   "encrypted_password",     default: "",    null: false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          default: 0,     null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string   "current_sign_in_ip"
    t.string   "last_sign_in_ip"
    t.datetime "created_at",                             null: false
    t.datetime "updated_at",                             null: false
    t.string   "name"
    t.string   "phone"
    t.string   "extension"
    t.string   "cnpj"
    t.string   "lat"
    t.string   "long"
    t.string   "address"
    t.boolean  "actived",                default: false
    t.index ["cnpj"], name: "index_user_blood_banks_on_cnpj", unique: true
    t.index ["email"], name: "index_user_blood_banks_on_email", unique: true
    t.index ["reset_password_token"], name: "index_user_blood_banks_on_reset_password_token", unique: true
  end

  create_table "user_blood_donators", force: :cascade do |t|
    t.string   "email",                  default: "", null: false
    t.string   "encrypted_password",     default: "", null: false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          default: 0,  null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string   "current_sign_in_ip"
    t.string   "last_sign_in_ip"
    t.datetime "created_at",                          null: false
    t.datetime "updated_at",                          null: false
    t.string   "name"
    t.date     "date_birth"
    t.string   "phone"
    t.string   "cpf"
    t.boolean  "notification"
    t.string   "genre"
    t.string   "blood_type"
    t.boolean  "admin"
    t.date     "last_donation"
    t.string   "cep"
    t.string   "long"
    t.string   "lat"
    t.index ["cpf"], name: "index_user_blood_donators_on_cpf", unique: true
    t.index ["email"], name: "index_user_blood_donators_on_email", unique: true
    t.index ["reset_password_token"], name: "index_user_blood_donators_on_reset_password_token", unique: true
  end

end
