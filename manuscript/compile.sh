#!/bin/bash

if [[ " $* " == *" --clean "* ]]; then
    git clean -Xfd .
fi

docker run --rm -it --user="$(id -u):$(id -g)" --net=none -v "$PWD":/data "blang/latex:ubuntu" pdflatex -interaction=nonstopmode -output-directory=. main.tex
docker run --rm -it --user="$(id -u):$(id -g)" --net=none -v "$PWD":/data "blang/latex:ubuntu" bibtex main
docker run --rm -it --user="$(id -u):$(id -g)" --net=none -v "$PWD":/data "blang/latex:ubuntu" pdflatex -interaction=nonstopmode -output-directory=. main.tex
docker run --rm -it --user="$(id -u):$(id -g)" --net=none -v "$PWD":/data "blang/latex:ubuntu" pdflatex -interaction=nonstopmode -output-directory=. main.tex

docker run --rm -it --user="$(id -u):$(id -g)" --net=none -v "$PWD":/data "blang/latex:ubuntu" pdflatex -interaction=nonstopmode -output-directory=. supplementary.tex
