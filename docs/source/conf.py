# Configuration file for the Sphinx documentation builder.
#
# For the full list of built-in configuration values, see the documentation:
# https://www.sphinx-doc.org/en/master/usage/configuration.html

# -- Project information -----------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#project-information

project = 'D1_Max'
copyright = '2026, Agibot'
author = 'Agibot'
release = 'V0.1.0'

# -- General configuration ---------------------------------------------------
extensions = ['myst_parser']

templates_path = ['_templates']
exclude_patterns = []

# sphinx‑intl i18n 设置
language = "en"
locale_dirs = ["../locale/"]
gettext_compact = False

# -- Options for HTML output -------------------------------------------------
html_theme = 'sphinx_rtd_theme'
html_static_path = ["_static"]
html_css_files = ["css/tippy.css", "css/custom.css", "css/all.min.css"]

html_theme_options = {
    # 'logo_only': True,
    # 'display_version': True,
    # 'anchor_links': False,
    # 'touch_icon': '../icon.jpg',
    # 'logo_icon': '&#xe869',
    "logo_only": False,
    "style_external_links": True,
    "collapse_navigation": False,
}

mermaid_use_local = "js/mermaid@11.12.2/mermaid.esm.min.mjs"
mermaid_elk_use_local = "js/mermaid-layout-elk@0.2.0/mermaid-layout-elk.esm.min.mjs"
d3_use_local = "js/d3@7.9.0/d3.min.js"

tippy_js = ("js/@popperjs/core@2", "js/tippy.js@6")
tippy_props = {"theme": "material"}
tippy_tip_selector = "figure, table, img, p, aside, div.admonition, div.literal-block-wrapper, ul"
tippy_props = {"placement": "auto-start", "maxWidth": 500, "interactive": False,
               "theme": "material", "duration": [300, 200], "delay": [200, 100]}

html_favicon = '_static/favicon.ico'

html_copy_source = False
html_show_sourcelink = False
html_show_sphinx = False
html_secnumber_suffix = ' '
