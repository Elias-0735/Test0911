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
html_static_path = ['_static']
html_css_files = ["css/custom.css"]

html_copy_source = False
html_show_sourcelink = False
html_show_sphinx = False
html_secnumber_suffix = ' '
