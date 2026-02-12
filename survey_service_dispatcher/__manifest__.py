# __manifest__.py
{
    'name': 'Survey Service Dispatcher',
    'version': '1.0',
    'category': 'Marketing/Surveys',
    'summary': 'Custom start screen with service selection cards',
    'description': """
        Replaces the standard survey start button with a 4-card selection layout 
        (Therapy, Teen Therapy, Couples, Psychiatry) linking to other surveys.
    """,
    'depends': ['survey'],
    'data': [
        'views/survey_survey_views.xml',
        'views/survey_templates.xml',
    ],
    'assets': {
        'web.assets_frontend': [
            'survey_service_dispatcher/static/src/js/survey_auto_next.js',
        ],
    },
    'installable': True,
    'application': False,
    'license': 'LGPL-3',
}