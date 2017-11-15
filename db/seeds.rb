# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all

lebron = User.create({name: "Lebron", age: 26, image_url: "http://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/1966.png&w=350&h=254", bio: "I play bball"})
jay_z = User.create({name: "Jay-z", age: 26, image_url: "http://www.rap-up.com/app/uploads/2014/12/jay-z.jpg", bio: "I rap"})
will = User.create({name: "Will Smith", age: 26, image_url: "https://images-na.ssl-images-amazon.com/images/M/MV5BNTczMzk1MjU1MV5BMl5BanBnXkFtZTcwNDk2MzAyMg@@._V1_UY317_CR2,0,214,317_AL_.jpg", bio: "I act"})
danny = User.create({name:"User", age: 47, image_url: "https://media.wmagazine.com/photos/592c0424cc1eac746f6e7417/master/h_600,c_limit/GettyImages-104838507_master.jpg", bio: "I am a user"})

lebron.goals.create({description: "lebron", name: "motivation", time: "5 days"})
jay_z.goals.create({description: "jay", name: "motivation", time: "5 days"})
will.goals.create({description: "heyy", name: "motivation", time: "5 days"})

lebron.goals.first.action_items.create({content: "im going to make it happen", active: "true", name: "action"})

