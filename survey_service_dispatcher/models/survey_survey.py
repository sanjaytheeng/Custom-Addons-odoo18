from odoo import models, fields

class Survey(models.Model):
    _inherit = 'survey.survey'

    # Checkbox to enable this specific layout
    is_service_dispatcher = fields.Boolean(string="Use Service Dispatcher Layout")

    # Fields to store the URLs for the 4 buttons
    url_therapy = fields.Char(string="Therapy Survey URL")
    url_teen_therapy = fields.Char(string="Teen Therapy Survey URL")
    url_couples_therapy = fields.Char(string="Couples Therapy Survey URL")
    url_psychiatry = fields.Char(string="Psychiatry Survey URL")