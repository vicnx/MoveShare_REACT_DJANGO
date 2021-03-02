from app.modules.core.renderers import ApiJSONRenderer


class ProfileJSONRenderer(ApiJSONRenderer):
    object_label = 'profile'
    pagination_object_label = 'profiles'
    pagination_count_label = 'profilesCount'
