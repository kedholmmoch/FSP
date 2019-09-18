json.extract! essay, :id, :title, :body, :user_id, :summary, :image_url, :updated_at, :published_at
json.set! :minutes_to_read, essay.minutes_to_read
json.set! :author, essay.author.profile_name
json.set! :author_img, essay.author.image_url
json.set! :author_blurb, essay.author.profile_blurb