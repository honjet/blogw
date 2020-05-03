module ApplicationHelper
  def serialize(object, **options)
    ActiveModelSerializers::SerializableResource.new(object, options).as_json
  end

  def serialize_with_csrf_token(args)
    serialize(args).merge(authenticityToken: form_authenticity_token)
  end
end
