#!/bin/zsh

while true; do
  echo "Script Run..."
  git add *
  git commit -m "date model changes"
  git push -u origin main

  sleep 600
done
