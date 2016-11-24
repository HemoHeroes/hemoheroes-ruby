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

ActiveRecord::Schema.define(version: 20161123133252) do

  create_table "active_admin_comments", force: :cascade do |t|
    t.string   "namespace"
    t.text     "body"
    t.string   "resource_id",   null: false
    t.string   "resource_type", null: false
    t.string   "author_type"
    t.integer  "author_id"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.index ["author_type", "author_id"], name: "index_active_admin_comments_on_author_type_and_author_id"
    t.index ["namespace"], name: "index_active_admin_comments_on_namespace"
    t.index ["resource_type", "resource_id"], name: "index_active_admin_comments_on_resource_type_and_resource_id"
  end

  create_table "admin_users", force: :cascade do |t|
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
    t.index ["email"], name: "index_admin_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_admin_users_on_reset_password_token", unique: true
  end

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

  create_table "hospital_necessities", force: :cascade do |t|
    t.integer  "a_positive"
    t.integer  "a_negative"
    t.integer  "b_positive"
    t.integer  "b_negative"
    t.integer  "ab_positive"
    t.integer  "ab_negative"
    t.integer  "o_positive"
    t.integer  "o_negative"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  create_table "hospitals", force: :cascade do |t|
    t.string   "name"
    t.string   "email"
    t.string   "cnpj"
    t.string   "password"
    t.string   "cep"
    t.string   "street"
    t.string   "district"
    t.string   "number"
    t.string   "city"
    t.string   "state"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "notifications", force: :cascade do |t|
    t.date     "last_notification"
    t.boolean  "appear"
    t.datetime "created_at",             null: false
    t.datetime "updated_at",             null: false
    t.integer  "user_blood_donators_id"
    t.integer  "demand_blood_banks_id"
    t.index ["demand_blood_banks_id"], name: "index_notifications_on_demand_blood_banks_id"
    t.index ["user_blood_donators_id"], name: "index_notifications_on_user_blood_donators_id"
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
    t.string   "address"
    t.boolean  "actived",                default: false
    t.float    "latitude"
    t.float    "longitude"
    t.boolean  "has_active_key",         default: false
    t.index ["cnpj"], name: "index_user_blood_banks_on_cnpj", unique: true
    t.index ["email"], name: "index_user_blood_banks_on_email", unique: true
    t.index ["reset_password_token"], name: "index_user_blood_banks_on_reset_password_token", unique: true
  end

  create_table "user_blood_donators", force: :cascade do |t|
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
    t.date     "date_birth"
    t.string   "phone"
    t.string   "cpf"
    t.boolean  "notification",           default: true
    t.string   "genre"
    t.string   "blood_type"
    t.boolean  "admin",                  default: false
    t.date     "last_donation"
    t.string   "cep"
    t.string   "long"
    t.string   "lat"
    t.string   "last_donation_token"
    t.string   "notification_token"
    t.integer  "use_hemoheroes"
    t.index ["cpf"], name: "index_user_blood_donators_on_cpf", unique: true
    t.index ["email"], name: "index_user_blood_donators_on_email", unique: true
    t.index ["reset_password_token"], name: "index_user_blood_donators_on_reset_password_token", unique: true
  end

  create_table "users", force: :cascade do |t|
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
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

end
