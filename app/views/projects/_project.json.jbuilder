json.extract! project, :id, :title, :description, :started_at, :web_url, :image_url, :created_at, :updated_at
json.url project_url(project, format: :json)
