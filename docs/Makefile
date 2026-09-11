# Minimal makefile for Sphinx documentation

SPHINXOPTS    ?=
SPHINXBUILD   ?= sphinx-build
SOURCEDIR     = source
BUILDDIR      = build

.PHONY: help Makefile

help:
	@$(SPHINXBUILD) -M help "$(SOURCEDIR)" "$(BUILDDIR)" $(SPHINXOPTS) $(O)

html:
	@$(SPHINXBUILD) -b html $(SOURCEDIR) $(BUILDDIR)/html

# 提取文本生成 .pot 模板
gettext:
	$(SPHINXBUILD) -b gettext $(SOURCEDIR) $(BUILDDIR)/locale

# 根据pot更新 zh_CN 的po文件，注意下划线 zh_CN
update-po: gettext
	sphinx-intl update -p $(BUILDDIR)/locale -l zh_CN

# 本地编译中文版本
html-zhcn:
	$(SPHINXBUILD) -D language=zh_CN -b html $(SOURCEDIR) $(BUILDDIR)/html_zhcn

clean:
	rm -rf $(BUILDDIR)
