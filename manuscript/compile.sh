#!/bin/bash

docker run --rm -it --user="$(id -u):$(id -g)" --net=none -v "$PWD":/data "blang/latex:ubuntu" pdflatex -interaction=nonstopmode -output-directory=. main.tex
