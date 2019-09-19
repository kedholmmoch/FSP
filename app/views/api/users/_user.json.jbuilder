json.extract! user, :id, :username, :profile_name, :profile_blurb, :twitter_url, :image_url
json.set! :authored_essays, user.essay_ids
json.set! :joined_on, user.created_at