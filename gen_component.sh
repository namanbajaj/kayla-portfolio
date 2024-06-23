#!/bin/bash

# Check if component name is provided
if [ -z "$1" ]; then
  echo "Please provide a component name"
  exit 1
fi

# Get the component name from the command line argument
COMPONENT_NAME=$1

# Convert the component name to PascalCase for the component filename and class name
PASCAL_CASE_COMPONENT_NAME=$(echo $COMPONENT_NAME | sed -r 's/(^|-)(\w)/\U\2/g')

# Create the component directory
mkdir -p src/$PASCAL_CASE_COMPONENT_NAME

# Create the component JS file
cat <<EOL > src/$PASCAL_CASE_COMPONENT_NAME/$PASCAL_CASE_COMPONENT_NAME.tsx
import React from 'react';
import './$PASCAL_CASE_COMPONENT_NAME.css';

function $PASCAL_CASE_COMPONENT_NAME()  {
  return (
    <div>
        <h1>$COMPONENT_NAME</h1>
    </div>
  );
};

export default $PASCAL_CASE_COMPONENT_NAME;
EOL

# Create the component CSS file
cat <<EOL > src/$PASCAL_CASE_COMPONENT_NAME/$PASCAL_CASE_COMPONENT_NAME.css
EOL

# Output success message
echo "Component $PASCAL_CASE_COMPONENT_NAME created successfully in src/components/$PASCAL_CASE_COMPONENT_NAME/"
