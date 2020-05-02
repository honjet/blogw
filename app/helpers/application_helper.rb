module ApplicationHelper
  def serialize(object, **options)
    ActiveModelSerializers::SerializableResource.new(object, options).as_json
  end
end
