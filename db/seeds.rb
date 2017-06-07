# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# Employee.create!([
#   { name: "#{Faker::Name.first_name} #{Faker::Name.last_name}" },
#   { name: "#{Faker::Name.first_name} #{Faker::Name.last_name}" },
#   { name: "#{Faker::Name.first_name} #{Faker::Name.last_name}" },
#   { name: "#{Faker::Name.first_name} #{Faker::Name.last_name}" },
#   { name: "#{Faker::Name.first_name} #{Faker::Name.last_name}" }
# ])

Absence.create!([
  { employee_id: 3, ab_type: 'hol-am', date: 10.days.from_now.to_datetime },
  { employee_id: 1, ab_type: 'sick-am', date: 10.days.from_now.to_datetime },
  { employee_id: 4, ab_type: 'hol-am', date: 10.days.from_now.to_datetime },
  { employee_id: 5, ab_type: 'hol-pm', date: 10.days.from_now.to_datetime },
  { employee_id: 7, ab_type: 'sick-am', date: 10.days.from_now.to_datetime },
  { employee_id: 6, ab_type: 'sick-pm', date: 10.days.from_now.to_datetime }
])
