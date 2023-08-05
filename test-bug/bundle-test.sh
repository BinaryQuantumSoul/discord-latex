#!/bin/bash

lines_to_append="/**
 * @name MathJaxtTest
 * @author QuantumSoul
 * @description MathJax test
 * @version 0.0.0
 */"
file_path="out/mathjax.plugin.js"

npx webpack --config webpack.config.js

{ echo -e "$lines_to_append"; cat "$file_path"; } > temp_file && mv temp_file "$file_path"
