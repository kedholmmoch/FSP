# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


### USERS

# Demo User

=begin

User.create(
    username: 'UserDemo', 
    password: 'password', 
    profile_name: "Demo Z. User", 
    profile_blurb: "Just some person on the internet who likes to read and write"
)


# Other Users

User.create(
    username: 'SenecaMinor', 
    password: 'password', 
    profile_name: "Seneca the Younger", 
    profile_blurb: "Writer, philosopher, and sometimes playwright. Lead advisor to Nero Augustus."
)

User.create(
    username: 'SenecaMaior', 
    password: 'password', 
    profile_name: "Seneca the Elder", 
    profile_blurb: "Legal expert. Fan of hypotheticals. Spanish transplant in Rome"
)

User.create(
    username: 'TullyPaterPatriae', 
    password: 'password', 
    profile_name: "Marcus Tullius Cicero", 
    profile_blurb: "Arpinate by birth, Roman in all that matters. I write on politics, law, philosophy, language, and morality. Savior of the Republic."
)

=end 

##  Up until here has been seeded on my computer + onto my Heroku -- thus the commenting out


###  ESSAYS


