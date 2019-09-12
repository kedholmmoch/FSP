@essays.each do |essay|
    json.set! essay.id do
        json.extract! essay, :id, :title, :user_id, :summary, :image_url
    end
end