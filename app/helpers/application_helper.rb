module ApplicationHelper
  def serialize(object, **options)
    ActiveModelSerializers::SerializableResource.new(object, options).as_json
  end

  def serialize_with_csrf_token(args)
    serialize(args).merge(authenticityToken: form_authenticity_token)
  end

  def active_if_now(path)
    current_page?(path) ? 'active': ''
  end
end
