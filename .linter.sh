#!/bin/bash
cd /home/kavia/workspace/code-generation/skillbridge-analyzer-25267-de8c2380/skillbridge_analyzer_web
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

