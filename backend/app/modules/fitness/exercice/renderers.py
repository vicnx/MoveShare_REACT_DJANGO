from app.modules.core.renderers import ApiJSONRenderer


class ExerciceJSONRenderer(ApiJSONRenderer):
    object_label = 'exercice'
    pagination_object_label = 'exercices'
    pagination_count_label = 'exercicesCount'
