@essays.each do |essay|
    json.set! essay.id do
        json.extract! essay, :id, :title, :user_id, :summary, :image_url, :updated_at, :published_at, :featured
        json.set! :author, essay.author.profile_name
        json.set! :author_img, essay.author.image_url
        json.set! :preview, essay.text_preview
        json.set! :word_count, essay.word_count
        json.set! :minutes_to_read, essay.minutes_to_read
        json.set! :updated_at_string, essay.updated_at.to_s
    end
end