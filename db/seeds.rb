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

lebron.goals.create({description: "My team sucks right now. I want them to be better so I need to go super sayian", name: "To be a Better Player", time: "5 days"})
jay_z.goals.create({description: "My rapping sucks at the moment I need to get better", name: "To be a better rapper", time: "5 days"})
will.goals.create({description: "I suck in the recent movies I played in. I either need to have better movies or just quit", name: "To be a Better Act", time: "5 days"})
danny.goals.create({description: "I am a user I dont care about you", name: "motivation", time: "5 days"})

lebron.goals.first.action_items.create({content: "Im going to kick everybody off the team", active: "true", name: "action"})
jay_z.goals.first.action_items.create({content: "Im going to have other people write my lyrics", active: "true", name: "action"})
will.goals.first.action_items.create({content: "Im going to pick better movies to act in", active: "true", name: "action"})
danny.goals.first.action_items.create({content: "I don't have action item I am a user I dont care", active: "true", name: "action"})

