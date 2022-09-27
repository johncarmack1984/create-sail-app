#!/bin/bash -i

if [ -z "$1" ]
    then
        read -p 'Project name: (default: "new-project-#") ' projectname
    else
        projectname=$1
fi

echo $projectname