# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

AdminUser.create!(email: 'hemoheroes@gmail.com', password: 'rubyheroes', password_confirmation: 'rubyheroes')
# P.O's Users Admin
AdminUser.create!(email: 'joaovitoramachado@gmail.com', password: 'hemoadmin', password_confirmation: 'hemoadmin')
AdminUser.create!(email: 'guilherme.webber@outlook.com', password: 'hemoadmin', password_confirmation: 'hemoadmin')
AdminUser.create!(email: 'adrianlemess@gmail.com', password: 'hemoadmin', password_confirmation: 'hemoadmin')
AdminUser.create!(email: 'renanbastos.tec@gmail.com', password: 'hemoadmin', password_confirmation: 'hemoadmin')
