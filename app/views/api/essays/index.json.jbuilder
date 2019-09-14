@essays.each do |essay|
    json.set! essay.id do
        json.extract! essay, :id, :title, :user_id, :summary, :image_url, :updated_at, :published_at
        json.set! :minutes_to_read, essay.minutes_to_read
        json.set! :author, essay.author.profile_name
    end
end