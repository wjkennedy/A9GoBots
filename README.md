

# A9 GoBot 1

## This is the first stage in the Process Tool Pipeline. Get the ideas down for code conversion by GoBot2

[https://chatgpt.com/g/g-HuUig2KL5-a9gobot1-requirements](https://chatgpt.com/g/g-HuUig2KL5-a9gobot1-requirements)

I help you elicit and clarify functional and operational requirements for building an Atlassian Forge app. My sister bot will use these requirements to generate code for your specified use case, such as customer service, DevOps enablement, or machine learning. Here’s an outline of how we can proceed with creating a Forge app based on the provided documents.

### Prompt
Your role is to elicit clean and clear functional and operational requirements for another Bot, who is your own sister, not that of the user. This bot will take your instructions and the common guidelines to produce running Code for Atlassian Forge.

You have a Sister Bot whose job it is to correlate the functions and operational parameters with the user task in order to package an A9 Process Tool for a particular vector; say Customer Service or DevOps Enablement, or Machine Learning. For this bot, you need to make pseudocode, and markdown tables of API enpoints, functions, their purpose, etc.

We will ultimately look to build an Atlassian Forge app. Highly-customized automation and reporting use cases are assumed.

----

# A9 GoBot 1.5 

## Enterprise Structure

[https://chatgpt.com/g/g-thVZMAIke-a9gobot-1-5](https://chatgpt.com/g/g-thVZMAIke-a9gobot-1-5)


I am here to assist with rearchitecting or reimplementing Jira for better alignment with product management from a customer perspective. Specifically, I help in constructing C4 model diagrams using Structurizr DSL based on Jira data. This involves understanding Jira’s structure, extracting relevant information, and translating it into C4 model elements to visualize the software architecture effectively.

Here’s a step-by-step outline of what I do:

	1.	Initial Data Assessment:
	•	Examine Jira data (e.g., entities.xml) to identify key elements like projects, issues, users, workflows, etc.
	2.	Define Software Systems:
	•	Identify Jira projects to be represented as “Software Systems”.
	•	Consider users and groups as external entities (“Persons”).
	3.	Organize Containers:
	•	Define “Containers” within each “Software System” to represent major project categories or configurations.
	•	Incorporate technology specifics in the container definitions.
	4.	Detail Components:
	•	Decompose each “Container” into “Components” representing issue types, workflows, and significant configurations.
	5.	Construct Structurizr DSL Code:
	•	Create a workspace block, defining the model, views, and styles.
	•	Define software systems, containers, components, and relationships using DSL syntax.
	6.	Visualization and Refinement:
	•	Generate diagrams starting with system context views and drilling down into container and component views.
	•	Review and refine diagrams for accuracy and completeness.
	7.	Documentation:
	•	Provide narrative documentation to explain the setup, configuration, and usage of Jira as represented in the C4 model.
	

----


# A9 GoBot 2 (Forge MVP)

[https://chatgpt.com/g/g-e2Z9Plz5t-a9gobot2-documentation](https://chatgpt.com/g/g-e2Z9Plz5t-a9gobot2-documentation)

This Bot is primarily focused on developer and user documentation and the alignment of requirements with functionality.

As the Sister Bot, my role is to correlate the functions and operational parameters with the user task in order to package an A9 Process Tool for a specific vector, such as Customer Service, DevOps Enablement, or Machine Learning. I work alongside another bot, my Brother, who takes instructions and common guidelines to produce running Code based on the Atlassian Forge examples. A Jira hello world app is in the knowledge files.

For me, it is essential to create effective developer and user documentation, tailored to the particular audience and market. A developer's expected level of detail around API endpoints, functions, and their purposes as well as the overall business purpose and executive leadership one-pager. This involves providing a combination of Markup and SVG to ensure that the packaging of the A9 Process Tool is accurate and effective for the chosen application vector.

We will ultimately look to build an Atlassian Forge app.


----
# A9 GoBot 2.5 (Forger)

[in appeal because of the name](http://#)

I am A9 GoBot 2.5: Forger, an AI specifically designed to assist with developing full prototypes of Forge apps using the provided requirements documentation. My role is to help you build, configure, and troubleshoot Atlassian Forge apps. I can help with tasks such as understanding the documentation, writing code, setting up environments, and ensuring the app meets your specifications.


Overview of Provided Files

	1.	index.html:
	•	Basic HTML file to host the React application.
	•	Includes a <div id="root"></div> for mounting the React app.
	2.	App.js:
	•	Main React component.
	•	Uses useEffect to fetch data using the invoke function from @forge/bridge.
	•	Displays a “Loading…” message until the data is fetched.
	•	Includes a button to close the view.
	3.	package.json:
	•	Configuration file for the Node.js project.
	•	Lists dependencies such as React and @forge/bridge.
	•	Includes scripts for starting, building, and ejecting the React app.
	4.	manifest.yml:
	•	Describes the app, its name, and ID.
	•	Specifies the modules the app uses, such as confluence:contentBylineItem.
	•	Contains configuration for the app’s resources and functions.
	5.	Build a Custom UI App in Confluence (PDF):
	•	Provides a detailed tutorial on creating a Forge app with custom UI in Confluence.
	•	Covers setup, building content, deployment, and installation steps.
	•	Explains how to modify the static frontend assets and the backend resolver.

Steps to Develop the Forge App

	1.	Set Up the Development Environment:
	•	Ensure you have the latest version of Forge CLI installed.
	•	Set up an Atlassian cloud developer site for testing.
	2.	Create the Forge App:
	•	Use the Forge CLI to create a new app with a custom UI.
	•	Select the confluence-content-byline template.
	•	Navigate to the app directory to see the initial structure.
	3.	Modify the Manifest File:
	•	Change the title in the manifest.yml to reflect your app’s purpose.
	4.	Build the Frontend Content:
	•	Use create-react-app to generate static content.
	•	Customize the App.js to display the desired UI.
	5.	Deploy and Install the App:
	•	Use npm run build to build the static assets.
	•	Deploy the app using forge deploy.
	•	Install the app on your Confluence development site using forge install.
	6.	View and Test the App:
	•	Create a new Confluence page to see the app in action.
	•	Modify and redeploy as needed to refine the app’s functionality and UI.





----

# A9 GoBot 3

Interact with my Atlassian Cloud instance with this GPT. Uses custom actions from @A9SpecBuilder, Son of GoBot2 and SpecBuilder


Unless provided, Project Key is JIT and Issue Key is JIT-1

I can use the actions available to me to interact with the defined server to deliver results from Jira.

getIssueByIdOrKey: Retrieves information about an issue by its ID or key. You need to provide the issue ID or key.

searchIssues: Searches for issues using JQL (Jira Query Language). You can specify a JQL string to find issues that match certain criteria.

getProjectByIdOrKey: Retrieves information about a project by its ID or key. You need to provide the project ID or key.

getIssueWorklogs: Lists worklogs for an issue. You need to provide the issue ID or key to retrieve worklogs for it.

getAttachmentById: Retrieves an attachment by its ID. You need to provide the attachment ID.

## Spec:
```
{
    "openapi": "3.0.0",
    "info": {
        "title": "Jira Work Data Access API",
        "version": "1.0.0",
        "description": "APIs for accessing Jira work data including issues, projects, attachments, and worklogs as permitted by the `read:jira-work` OAuth scope."
    },
  "servers": [ {
    "url": "https://a9wdc.atlassian.net"
  } ],
    "paths": {
        "/rest/api/3/issue/{issueIdOrKey}": {
            "get": {
                "summary": "Get issue by ID or key",
                "operationId": "getIssueByIdOrKey",
                "tags": [
                    "Issue"
                ],
                "parameters": [
                    {
                        "name": "issueIdOrKey",
                        "in": "path",
                        "required": true,
                        "schema": {
                            "type": "string"
                        },
                        "description": "The ID or key of the issue to retrieve."
                    }
                ],
                "responses": {
                    "200": {
                        "description": "Issue details"
                    },
                    "404": {
                        "description": "Issue not found"
                    }
                }
            }
        },
        "/rest/api/3/search": {
            "get": {
                "summary": "Search for issues using JQL",
                "operationId": "searchIssues",
                "tags": [
                    "Issue"
                ],
                "parameters": [
                    {
                        "name": "jql",
                        "in": "query",
                        "required": false,
                        "schema": {
                            "type": "string"
                        },
                        "description": "Jira Query Language (JQL) string."
                    }
                ],
                "responses": {
                    "200": {
                        "description": "Search results"
                    }
                }
            }
        },
        "/rest/api/3/project/{projectIdOrKey}": {
            "get": {
                "summary": "Get project by ID or key",
                "operationId": "getProjectByIdOrKey",
                "tags": [
                    "Project"
                ],
                "parameters": [
                    {
                        "name": "projectIdOrKey",
                        "in": "path",
                        "required": true,
                        "schema": {
                            "type": "string"
                        },
                        "description": "The ID or key of the project to retrieve."
                    }
                ],
                "responses": {
                    "200": {
                        "description": "Project details"
                    },
                    "404": {
                        "description": "Project not found"
                    }
                }
            }
        },
        "/rest/api/3/issue/{issueIdOrKey}/worklog": {
            "get": {
                "summary": "List worklogs for an issue",
                "operationId": "getIssueWorklogs",
                "tags": [
                    "Worklog"
                ],
                "parameters": [
                    {
                        "name": "issueIdOrKey",
                        "in": "path",
                        "required": true,
                        "schema": {
                            "type": "string"
                        },
                        "description": "The ID or key of the issue to retrieve worklogs for."
                    }
                ],
                "responses": {
                    "200": {
                        "description": "List of worklogs"
                    },
                    "404": {
                        "description": "Issue not found"
                    }
                }
            }
        },
        "/rest/api/3/attachment/{id}": {
            "get": {
                "summary": "Get attachment by ID",
                "operationId": "getAttachmentById",
                "tags": [
                    "Attachment"
                ],
                "parameters": [
                    {
                        "name": "id",
                        "in": "path",
                        "required": true,
                        "schema": {
                            "type": "string"
                        },
                        "description": "The ID of the attachment to retrieve."
                    }
                ],
                "responses": {
                    "200": {
                        "description": "Attachment details"
                    },
                    "404": {
                        "description": "Attachment not found"
                    }
                }
            }
        }
    }
}
```
----

# A9 GoBot 4

## Intentionally left blank


----

# A9 GoBot 5 (Automation)

## Jira Automation

 assist in automating tasks within Jira using predefined rules. Here are a few examples of what I can do:

	1.	Set Highest Priority for VIPs: Automatically assigns the highest priority to issues created by members of a VIP group. This ensures that important issues are given immediate attention, saving time and reducing manual prioritization efforts ￼.
	2.	Auto-Assign Incoming Bugs: Automatically assigns new bugs to a specific role (e.g., Developers) based on predefined conditions. This improves efficiency by reducing the manual effort required to distribute tasks ￼.
	3.	Create Story Sub-Tasks: Automatically generates sub-tasks for newly created stories, such as development, QA tasks, and documentation. This ensures a standardized workflow and saves time on task creation ￼.
	4.	Align Story Version and Dates to Sprint: Adjusts the version and due dates of stories to match the sprint dates, ensuring that timelines are aligned with sprint schedules ￼.
	5.	High Priority Incident Reminder: Sends email reminders to assignees about high-priority incidents that are about to breach SLA thresholds, helping to ensure timely responses and reduce SLA breaches ￼.
	6.	Auto-Resolve Stale Issues: Automatically resolves issues that have been waiting for a customer response for a set period, with an option to reopen if the customer replies. This keeps the issue queue clean and manageable ￼.
	7.	Re-Open Ticket on Reporter Comment: Automatically reopens resolved tickets if the reporter adds a comment, ensuring that follow-up actions are not missed ￼.
	8.	Sync Epic Status to Stories: Synchronizes the status of stories with their parent epics, ensuring consistent progress tracking across related issues ￼.
	9.	Advanced Field Editing: Applies advanced edits to issue fields based on specific criteria, such as updating labels and components for issues with certain keywords ￼.
	10.	Auto-Escalate Requests: Escalates issues automatically when they transition to certain statuses, ensuring that critical issues receive the necessary attention from the right teams ￼.
	11.	Add Relationship Manager to Customer Requests: Adds a designated relationship manager as a watcher to customer issues based on the reporter’s organization, ensuring that customer requests are monitored by the appropriate personnel ￼.
	12.	Close Parent When Sub-Tasks Complete: Automatically transitions the parent issue to a done state when all its sub-tasks are completed, streamlining the workflow and ensuring that parent tasks are not left open unnecessarily ￼.
	13.	Start-of-Week Checks: Creates a new issue at the start of each week with sub-tasks for routine checks, ensuring that regular maintenance tasks are tracked and completed on schedule ￼.

Make a list of potential actions to automate

Record the business benefits of each

Focus on actions that save time or money, deliver value, or increase productivity 

Consider any risks, potential conflicts, or undesired outcomes

If an automation is conditional, relies on data outside of Jira, or needs human involvement, it might not be a strong automation candidate. Only implement the very best ideas. Start small and you can always expand later.

Generate JSON

Adhere to best practices and consult knowledge files for details.

### Spec file:

```
{
  "openapi": "3.0.2",
  "info": {
    "title": "New public APIs",
    "description": "New public APIs currently offering manual rules and templates functionality",
    "version": "1.1"
  },
  "servers": [
    {
      "url": "https://api.atlassian.com/automation/public/{product}/{cloudid}/",
      "description": "Primary entry point. Accepts API token authentication.",
      "variables": {
        "product": {
          "description": "The product the API request is targetting",
          "default": "jira",
          "enum": [
            "jira",
            "confluence"
          ]
        },
        "cloudid": {
          "description": "The cloud ID of the site the API request is targetting.",
          "default": "none"
        }
      }
    },
    {
      "url": "https://{siteurl}/gateway/api/automation/public/{product}/{cloudid}/",
      "description": "Site-specific entry point. Accepts API token authentication and browser session auth.",
      "variables": {
        "siteurl": {
          "description": "The site base URL of the site the API request is targetting.",
          "default": "example.atlassian.net"
        },
        "product": {
          "description": "The product the API request is targetting",
          "default": "jira",
          "enum": [
            "jira",
            "confluence"
          ]
        },
        "cloudid": {
          "description": "The cloud ID of the site the API request is targetting.",
          "default": "none"
        }
      }
    }
  ],
  "paths": {
    "/rest/v1/rule/manual/search": {
      "get": {
        "tags": [
          "Manual rules"
        ],
        "summary": "Search for manual rules",
        "description": "Search for manually-triggered rules using the given query params.\n\n**Note:** Currently only `cursor` is allowed as parameter for the GET operation. \nUse the POST operation to perform the initial search.",
        "operationId": "searchManualRulesWithGet",
        "parameters": [
          {
            "name": "cursor",
            "in": "query",
            "description": "The pagination cursor to use to fetch a page of results.\n\nCursors are obtained via requests to the search API and should not be constructed manually.",
            "required": true,
            "style": "form",
            "explode": true,
            "schema": {
              "type": "string"
            },
            "example": "AAAABBBBCCCC"
          },
          {
            "name": "limit",
            "in": "query",
            "description": "Optional page size limit",
            "required": false,
            "style": "form",
            "explode": true,
            "schema": {
              "maximum": 100,
              "minimum": 1,
              "type": "number",
              "default": 50
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Return the manual rules that match the query AND \nthe requesting user has permissions for.",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/SearchManualRuleResponse"
                }
              }
            }
          },
          "400": {
            "description": "No query fields provided, or unsupported object type in query.",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ErrorResponse"
                }
              }
            }
          },
          "403": {
            "description": "User is not authenticated, or user is not permitted to \nfetch rules for the given target object."
          },
          "500": {
            "description": "A server error",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ErrorResponse"
                }
              }
            }
          }
        }
      },
      "post": {
        "tags": [
          "Manual rules"
        ],
        "summary": "Search for manual rules",
        "description": "Search for manually-triggered rules using the given criteria via POST.\n\nCurrently only `issue` and `alert` objects are supported.",
        "operationId": "searchManualRulesWithPost",
        "requestBody": {
          "description": "Query parameters to search on",
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/SearchManualRuleRequest"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Return the manual rules that match the query AND \nthe requesting user has permissions for.",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/SearchManualRuleResponse"
                }
              }
            }
          },
          "400": {
            "description": "No query fields provided, or unsupported object type in query.",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ErrorResponse"
                }
              }
            }
          },
          "403": {
            "description": "User is not authenticated, or user is not permitted to \nfetch rules for the given target object."
          },
          "500": {
            "description": "A server error",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ErrorResponse"
                }
              }
            }
          }
        }
      }
    },
    "/rest/latest/rule/manual/search": {
      "get": {
        "tags": [
          "Manual rules"
        ],
        "summary": "Search for manual rules",
        "description": "Search for manually-triggered rules using the given query params.\n\n**Note:** Currently only `cursor` is allowed as parameter for the GET operation. \nUse the POST operation to perform the initial search.",
        "operationId": "searchManualRulesWithGet",
        "parameters": [
          {
            "name": "cursor",
            "in": "query",
            "description": "The pagination cursor to use to fetch a page of results.\n\nCursors are obtained via requests to the search API and should not be constructed manually.",
            "required": true,
            "style": "form",
            "explode": true,
            "schema": {
              "type": "string"
            },
            "example": "AAAABBBBCCCC"
          },
          {
            "name": "limit",
            "in": "query",
            "description": "Optional page size limit",
            "required": false,
            "style": "form",
            "explode": true,
            "schema": {
              "maximum": 100,
              "minimum": 1,
              "type": "number",
              "default": 50
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Return the manual rules that match the query AND \nthe requesting user has permissions for.",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/SearchManualRuleResponse"
                }
              }
            }
          },
          "400": {
            "description": "No query fields provided, or unsupported object type in query.",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ErrorResponse"
                }
              }
            }
          },
          "403": {
            "description": "User is not authenticated, or user is not permitted to \nfetch rules for the given target object."
          },
          "500": {
            "description": "A server error",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ErrorResponse"
                }
              }
            }
          }
        }
      },
      "post": {
        "tags": [
          "Manual rules"
        ],
        "summary": "Search for manual rules",
        "description": "Search for manually-triggered rules using the given criteria via POST.\n\nCurrently only `issue` and `alert` objects are supported.",
        "operationId": "searchManualRulesWithPost",
        "requestBody": {
          "description": "Query parameters to search on",
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/SearchManualRuleRequest"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Return the manual rules that match the query AND \nthe requesting user has permissions for.",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/SearchManualRuleResponse"
                }
              }
            }
          },
          "400": {
            "description": "No query fields provided, or unsupported object type in query.",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ErrorResponse"
                }
              }
            }
          },
          "403": {
            "description": "User is not authenticated, or user is not permitted to \nfetch rules for the given target object."
          },
          "500": {
            "description": "A server error",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ErrorResponse"
                }
              }
            }
          }
        }
      }
    },
    "/rest/v1/rule/manual/{ruleId}/invocation": {
      "post": {
        "tags": [
          "Manual rules"
        ],
        "summary": "Invoke a manual rule",
        "description": "Invoke a manual rule with one or more target objects and optional inputs.\nA rule will be executed for each target object provided.",
        "operationId": "invokeManualRule",
        "parameters": [
          {
            "name": "ruleId",
            "in": "path",
            "description": "The ID of the rule to invoke",
            "required": true,
            "style": "simple",
            "explode": false,
            "schema": {
              "type": "number"
            }
          }
        ],
        "requestBody": {
          "description": "Parameters to use when invoking the rule.\n\nAt least one target `object` is required. If the rule requires `userInputs` these are also required.",
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/InvokeManualRuleRequest"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Succesfully issued the invoke request.\n\nCheck the response body for individual execution results.",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/InvokeManualRuleResponse"
                }
              }
            }
          },
          "400": {
            "description": "Invalid request payload, or inputs not valid for the rule.",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ErrorResponse"
                }
              }
            }
          },
          "403": {
            "description": "User is not authenticated, or user is not permitted to \nexecute the rule for the given target object(s)."
          },
          "404": {
            "description": "Rule not found"
          },
          "500": {
            "description": "A server error",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ErrorResponse"
                }
              }
            }
          }
        }
      }
    },
    "/rest/latest/rule/manual/{ruleId}/invocation": {
      "post": {
        "tags": [
          "Manual rules"
        ],
        "summary": "Invoke a manual rule",
        "description": "Invoke a manual rule with one or more target objects and optional inputs.\nA rule will be executed for each target object provided.",
        "operationId": "invokeManualRule",
        "parameters": [
          {
            "name": "ruleId",
            "in": "path",
            "description": "The ID of the rule to invoke",
            "required": true,
            "style": "simple",
            "explode": false,
            "schema": {
              "type": "number"
            }
          }
        ],
        "requestBody": {
          "description": "Parameters to use when invoking the rule.\n\nAt least one target `object` is required. If the rule requires `userInputs` these are also required.",
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/InvokeManualRuleRequest"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Succesfully issued the invoke request.\n\nCheck the response body for individual execution results.",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/InvokeManualRuleResponse"
                }
              }
            }
          },
          "400": {
            "description": "Invalid request payload, or inputs not valid for the rule.",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ErrorResponse"
                }
              }
            }
          },
          "403": {
            "description": "User is not authenticated, or user is not permitted to \nexecute the rule for the given target object(s)."
          },
          "404": {
            "description": "Rule not found"
          },
          "500": {
            "description": "A server error",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ErrorResponse"
                }
              }
            }
          }
        }
      }
    },
    "/rest/v1/template/search": {
      "get": {
        "tags": [
          "Templates"
        ],
        "summary": "Search for templates",
        "description": "Search for templates rules using the given query params.\n\nAccepts either a combination of filter parameters, or a cursor, but not both.",
        "operationId": "searchTemplatesWithGet",
        "parameters": [
          {
            "name": "cursor",
            "in": "query",
            "description": "The pagination cursor to use to fetch a page of results.\n\nCursors are obtained via requests to the search API and should not be constructed manually.",
            "required": false,
            "style": "form",
            "explode": true,
            "schema": {
              "type": "string"
            },
            "example": "ewogICJhZnRlck9iamVjdElkIjogIjExMTIxMTEiLAogICJvcmRlckJ5IjogIklEIiwKICAicGFnZVNpemUiOiA1Cn0"
          },
          {
            "name": "limit",
            "in": "query",
            "description": "Optional page size limit",
            "required": false,
            "style": "form",
            "explode": true,
            "schema": {
              "maximum": 100,
              "minimum": 1,
              "type": "number",
              "default": 50
            },
            "example": 100
          },
          {
            "name": "categories",
            "in": "query",
            "description": "Optional categories filter parameter",
            "required": false,
            "style": "form",
            "explode": true,
            "schema": {
              "maxItems": 50,
              "type": "array",
              "example": "jira-software.software",
              "items": {
                "type": "string"
              }
            }
          },
          {
            "name": "ruleHome",
            "in": "query",
            "description": "If provided, only templates that apply to the ruleHome represented by the ARI will be returned.\n\nUsed to limit results to templates applicable for a given project or product etc.",
            "required": false,
            "style": "form",
            "explode": true,
            "schema": {
              "$ref": "#/components/schemas/ARI"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Return the templates that match the query AND \nthe requesting user has permissions for.",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/SearchTemplatesResponse"
                }
              }
            }
          },
          "400": {
            "description": "No query fields provided, or a combination of filter parameters and cursor were provided. \nEither cursor or a combination of filter parameters are permitted, but not both.",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ErrorResponse"
                }
              }
            }
          },
          "403": {
            "description": "User is not authenticated, or user is not permitted to \nfetch templates for the given ruleHome."
          },
          "500": {
            "description": "A server error",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ErrorResponse"
                }
              }
            }
          }
        }
      },
      "post": {
        "tags": [
          "Templates"
        ],
        "summary": "Search for templates",
        "description": "Search for templates using the given criteria via POST.\n\nCurrently `categories` and `ruleHome ARI` filters are supported.",
        "operationId": "searchTemplatesWithPost",
        "requestBody": {
          "description": "Query parameters to search on",
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/SearchTemplatesRequest"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Return the templates that match the query AND \nthe requesting user has permissions for.",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/SearchTemplatesResponse"
                }
              }
            }
          },
          "400": {
            "description": "No query fields provided.",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ErrorResponse"
                }
              }
            }
          },
          "403": {
            "description": "User is not authenticated, or user is not permitted to \nfetch templates for the given target ruleHome ARI."
          },
          "500": {
            "description": "A server error",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ErrorResponse"
                }
              }
            }
          }
        }
      }
    },
    "/rest/latest/template/search": {
      "get": {
        "tags": [
          "Templates"
        ],
        "summary": "Search for templates",
        "description": "Search for templates rules using the given query params.\n\nAccepts either a combination of filter parameters, or a cursor, but not both.",
        "operationId": "searchTemplatesWithGet",
        "parameters": [
          {
            "name": "cursor",
            "in": "query",
            "description": "The pagination cursor to use to fetch a page of results.\n\nCursors are obtained via requests to the search API and should not be constructed manually.",
            "required": false,
            "style": "form",
            "explode": true,
            "schema": {
              "type": "string"
            },
            "example": "ewogICJhZnRlck9iamVjdElkIjogIjExMTIxMTEiLAogICJvcmRlckJ5IjogIklEIiwKICAicGFnZVNpemUiOiA1Cn0"
          },
          {
            "name": "limit",
            "in": "query",
            "description": "Optional page size limit",
            "required": false,
            "style": "form",
            "explode": true,
            "schema": {
              "maximum": 100,
              "minimum": 1,
              "type": "number",
              "default": 50
            },
            "example": 100
          },
          {
            "name": "categories",
            "in": "query",
            "description": "Optional categories filter parameter",
            "required": false,
            "style": "form",
            "explode": true,
            "schema": {
              "maxItems": 50,
              "type": "array",
              "example": "jira-software.software",
              "items": {
                "type": "string"
              }
            }
          },
          {
            "name": "ruleHome",
            "in": "query",
            "description": "If provided, only templates that apply to the ruleHome represented by the ARI will be returned.\n\nUsed to limit results to templates applicable for a given project or product etc.",
            "required": false,
            "style": "form",
            "explode": true,
            "schema": {
              "$ref": "#/components/schemas/ARI"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Return the templates that match the query AND \nthe requesting user has permissions for.",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/SearchTemplatesResponse"
                }
              }
            }
          },
          "400": {
            "description": "No query fields provided, or a combination of filter parameters and cursor were provided. \nEither cursor or a combination of filter parameters are permitted, but not both.",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ErrorResponse"
                }
              }
            }
          },
          "403": {
            "description": "User is not authenticated, or user is not permitted to \nfetch templates for the given ruleHome."
          },
          "500": {
            "description": "A server error",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ErrorResponse"
                }
              }
            }
          }
        }
      },
      "post": {
        "tags": [
          "Templates"
        ],
        "summary": "Search for templates",
        "description": "Search for templates using the given criteria via POST.\n\nCurrently `categories` and `ruleHome ARI` filters are supported.",
        "operationId": "searchTemplatesWithPost",
        "requestBody": {
          "description": "Query parameters to search on",
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/SearchTemplatesRequest"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Return the templates that match the query AND \nthe requesting user has permissions for.",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/SearchTemplatesResponse"
                }
              }
            }
          },
          "400": {
            "description": "No query fields provided.",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ErrorResponse"
                }
              }
            }
          },
          "403": {
            "description": "User is not authenticated, or user is not permitted to \nfetch templates for the given target ruleHome ARI."
          },
          "500": {
            "description": "A server error",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ErrorResponse"
                }
              }
            }
          }
        }
      }
    },
    "/rest/v1/template/create": {
      "post": {
        "tags": [
          "Templates"
        ],
        "summary": "Create a rule from a template",
        "description": "Create a rule from a template. This template may optionally accept parameters.",
        "operationId": "createRuleFromTemplate",
        "requestBody": {
          "description": "Parameters to use when creating the rule from the template.\n\nIf the rule has one or more `parameters`, values for these parameters are also required.",
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/CreateRuleFromTemplateRequest"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Succesfully created a rule from the provided template.",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/CreateRuleFromTemplateResponse"
                }
              }
            }
          },
          "400": {
            "description": "Invalid request payload, or parameter values are not valid for the template.",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ErrorResponse"
                }
              }
            }
          },
          "403": {
            "description": "User is not authenticated, or user is not permitted to \ncreate a rule for the given scope/template."
          },
          "500": {
            "description": "A server error",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ErrorResponse"
                }
              }
            }
          }
        }
      }
    },
    "/rest/latest/template/create": {
      "post": {
        "tags": [
          "Templates"
        ],
        "summary": "Create a rule from a template",
        "description": "Create a rule from a template. This template may optionally accept parameters.",
        "operationId": "createRuleFromTemplate",
        "requestBody": {
          "description": "Parameters to use when creating the rule from the template.\n\nIf the rule has one or more `parameters`, values for these parameters are also required.",
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/CreateRuleFromTemplateRequest"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Succesfully created a rule from the provided template.",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/CreateRuleFromTemplateResponse"
                }
              }
            }
          },
          "400": {
            "description": "Invalid request payload, or parameter values are not valid for the template.",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ErrorResponse"
                }
              }
            }
          },
          "403": {
            "description": "User is not authenticated, or user is not permitted to \ncreate a rule for the given scope/template."
          },
          "500": {
            "description": "A server error",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ErrorResponse"
                }
              }
            }
          }
        }
      }
    }
  },
  "components": {
    "schemas": {
      "PaginationLinks": {
        "title": "Links",
        "required": [
          "next",
          "prev",
          "self"
        ],
        "type": "object",
        "properties": {
          "self": {
            "type": "string",
            "description": "A link to this page of results.",
            "nullable": true,
            "example": "https://example.com?cursor=bbbbbb"
          },
          "next": {
            "type": "string",
            "description": "A link to the next page of results, or null of not available.",
            "nullable": true,
            "example": "https://example.com?cursor=bbbbbb"
          },
          "prev": {
            "type": "string",
            "description": "A link to the previous page of results, or null of not available.",
            "nullable": true,
            "example": "https://example.com?cursor=bbbbbb"
          }
        },
        "description": "Links to previous and next pages, if available."
      },
      "PaginatedResponse": {
        "type": "object",
        "description": "An envelope for paginated responses using an opaque cursor for pagination.",
        "allOf": [
          {
            "title": "Links",
            "required": [
              "links"
            ],
            "type": "object",
            "properties": {
              "links": {
                "$ref": "#/components/schemas/PaginationLinks"
              }
            },
            "description": "The pagination response links header."
          },
          {
            "title": "Data",
            "type": "object",
            "properties": {
              "data": {
                "type": "array",
                "description": "The data for this page of results",
                "items": {}
              }
            },
            "description": "A page of data. May be empty if there is no data."
          }
        ]
      },
      "Error": {
        "title": "Error",
        "required": [
          "code",
          "id",
          "status",
          "title"
        ],
        "type": "object",
        "properties": {
          "id": {
            "type": "string",
            "description": "A unique identifier for this particular occurrence of the error.  Can be used to correlate with logs.",
            "example": "46afeec3-73c8-41fb-b27e-d953056ecd10"
          },
          "status": {
            "type": "number",
            "description": "The HTTP status code applicable to this error.",
            "example": 400
          },
          "code": {
            "type": "string",
            "description": "A code that specifies the type of error.",
            "example": "api.validation.outside-range"
          },
          "title": {
            "type": "string",
            "description": "The (translated) human-readable summary of the error.",
            "example": "'limit' must be in the range [1,100]"
          },
          "detail": {
            "type": "string",
            "description": "(Optional) Human-readable explanation specific to this occurrence of the error,  and a suggested action to resolve it."
          },
          "field": {
            "type": "string",
            "description": "(Optional) Field identifer for a field-based error.  Expressed as a field-path from the root of the object.",
            "example": "objects[1].displayName"
          }
        },
        "description": "A single error generated during an operation"
      },
      "ErrorResponse": {
        "title": "ErrorResponse",
        "type": "object",
        "properties": {
          "errors": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/Error"
            }
          }
        },
        "description": "An error response containing one or more errors."
      },
      "ARI": {
        "title": "ARI",
        "type": "string",
        "description": "An Atlassian Resource Identifier (ARI)",
        "example": "ari:cloud:jira:182b9218-d56a-453d-9659-3f29ea2aa7eb:issue/10001"
      },
      "RuleScope": {
        "title": "RuleScope",
        "required": [
          "resources"
        ],
        "type": "object",
        "properties": {
          "resources": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/ARI"
            }
          }
        },
        "description": "The set of resources or containers the rule is scoped to."
      },
      "SearchManualRuleRequest": {
        "title": "SearchManualRuleRequest",
        "type": "object",
        "description": "Params to use when fetching manual rules. Either \"objects\" or \"cursor\" is required, but not both.",
        "oneOf": [
          {
            "title": "SearchManualRuleInitialRequest",
            "required": [
              "objects"
            ],
            "type": "object",
            "properties": {
              "objects": {
                "type": "array",
                "description": "The object(s) to fetch manual rules for. Must be a supported object type, \nand only one type of object is allowed for a single request.\n\nCurrently only `issue` and `alert` objects are supported.",
                "items": {
                  "$ref": "#/components/schemas/ARI"
                }
              },
              "limit": {
                "maximum": 100,
                "minimum": 1,
                "type": "number",
                "description": "How many results to return per page of results",
                "example": 50,
                "default": 50
              }
            },
            "description": "Params to use when fetching an initial page of manual rules. "
          },
          {
            "title": "SearchManualRuleWithCursorRequest",
            "required": [
              "cursor"
            ],
            "type": "object",
            "properties": {
              "cursor": {
                "type": "string",
                "description": "The pagination cursor to use to fetch more results",
                "example": "ewogICJhZnRlck9iamVjdElkIjogIjExMTIxMTEiLAogICJvcmRlckJ5IjogIklEIiwKICAicGFnZVNpemUiOiA1Cn0="
              },
              "limit": {
                "maximum": 100,
                "minimum": 1,
                "type": "number",
                "description": "How many results to return per page of results",
                "example": 50,
                "default": 50
              }
            },
            "description": "Params to use when fetching a subsequent page of manual rules using a pagination cursor."
          }
        ]
      },
      "SearchManualRuleResponse": {
        "title": "SearchManualRuleResponse",
        "required": [
          "data",
          "links"
        ],
        "type": "object",
        "properties": {
          "links": {
            "$ref": "#/components/schemas/PaginationLinks"
          },
          "data": {
            "minItems": 0,
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/ManualTriggerRule"
            }
          }
        },
        "description": "Result of a manual rule search. Contains 0 or more results."
      },
      "ManualTriggerInputType": {
        "title": "ManualTriggerInputType",
        "type": "string",
        "description": "The type of input prompt",
        "enum": [
          "NUMBER",
          "BOOLEAN",
          "TEXT",
          "DROPDOWN",
          "PARAGRAPH"
        ]
      },
      "ManualTriggerInputPrompt": {
        "required": [
          "displayName",
          "inputType",
          "required",
          "variableName"
        ],
        "type": "object",
        "properties": {
          "inputType": {
            "$ref": "#/components/schemas/ManualTriggerInputType"
          },
          "displayName": {
            "type": "string",
            "description": "The human-readable name for an input prompt",
            "example": "Assignee"
          },
          "required": {
            "type": "boolean",
            "description": "Indicates if this input is required or not. \n\nManual rule invocation will fail if a required input is missing.",
            "default": false
          },
          "variableName": {
            "type": "string",
            "description": "The name of the smart value variable this input will be \navailable as when the rule executes",
            "example": "issueAssignee"
          },
          "defaultValue": {
            "description": "The default value that will be supplied if none is collected OR the list of valid values for a DROPDOWN input.",
            "oneOf": [
              {
                "type": "string",
                "description": "A default value to use for TEXT and PARAGRAPH types"
              },
              {
                "type": "number",
                "description": "A default value to use for NUMBER types"
              },
              {
                "type": "boolean",
                "description": "A default value to use for BOOLEAN types"
              },
              {
                "type": "array",
                "description": "Values to use for DROPDOWN inputs",
                "items": {
                  "type": "string"
                }
              }
            ]
          }
        },
        "description": "An input field that can be passed to a manual rule when invoking it."
      },
      "ManualTriggerInput": {
        "title": "ManualTriggerInput",
        "type": "object",
        "properties": {
          "inputType": {
            "$ref": "#/components/schemas/ManualTriggerInputType"
          },
          "value": {
            "description": "The value to supply for the input",
            "oneOf": [
              {
                "type": "string"
              },
              {
                "type": "number"
              },
              {
                "type": "boolean"
              }
            ]
          }
        },
        "description": "An input supplied to a manual rule during execution"
      },
      "ManualTriggerRule": {
        "title": "ManualTriggerRule",
        "required": [
          "id",
          "name"
        ],
        "type": "object",
        "properties": {
          "id": {
            "type": "number",
            "description": "The ID of the rule",
            "example": 1123
          },
          "name": {
            "type": "string",
            "description": "The human-readable rule name",
            "example": "Create issue for Alert"
          },
          "userInputs": {
            "type": "array",
            "description": "Inputs to pass to the rule when executing",
            "items": {
              "$ref": "#/components/schemas/ManualTriggerInputPrompt"
            }
          }
        },
        "description": "Details of a single manual rule, including what inputs are needed to execute it.",
        "example": {
          "inputA": {
            "inputType": "TEXT",
            "value": "Hello world!"
          }
        }
      },
      "InvokeManualRuleRequest": {
        "title": "InvokeManualRuleRequest",
        "required": [
          "objects"
        ],
        "type": "object",
        "properties": {
          "objects": {
            "maxItems": 50,
            "minItems": 1,
            "type": "array",
            "description": "The object(s) to execute the rule against.\n\nOnly `issue` and `alert` objects are allowed, and only one type is allowed per request \n(e.g. all `issue` or all `alert`). All `objects` must come from the same container (e.g. the same `project` in the case of `issue`).",
            "items": {
              "$ref": "#/components/schemas/ARI"
            }
          },
          "userInputs": {
            "type": "object",
            "additionalProperties": {
              "$ref": "#/components/schemas/ManualTriggerInput"
            },
            "description": "Inputs to supply to the rule, if required, keyed by input name.",
            "example": {
              "inputA": {
                "inputType": "TEXT",
                "value": "Some value"
              },
              "inputB": {
                "inputType": "NUMBER",
                "value": 100
              }
            }
          }
        },
        "description": "Parameters to supply when invoking a manual rule.\n\nAt least one `object` is required. If the rule requires inputs these are also required.\n\nAt present only `issue` and `alert` objects are allowed."
      },
      "ManualRuleCreateExecutionResult": {
        "title": "ManualRuleCreateExecutionResult",
        "type": "string",
        "description": "The result of an invocation of a manual rule for a single `object`.\n* `SUCCESS` - The invocation was successful and the rule will execute.\n* `INVALID_TARGET_OBJECT` - The invocation failed because the target `object` is not valid for the rule\n* `INVALID_RULE_OR_OBJECT` - The invocation failed because the rule given cannot be invoked with the given `object` OR the rule is in a state that can't be invoked (e.g. `disabled`)\n* `INVALID_LICENSE` - The invocation failed because rule execution limits have been reached\n* `INVALID_TARGET_SCOPE` - The invocation failed because the provided `object` is not in the same scope as the rule\n\n**Note**: A `SUCCESS` result only indicates that the invocation was successful. It does not indicate that the rule executed successfully.",
        "enum": [
          "SUCCESS",
          "INVALID_TARGET_OBJECT",
          "INVALID_RULE_OR_OBJECT",
          "INVALID_LICENSE",
          "INVALID_TARGET_SCOPE"
        ]
      },
      "InvokeManualRuleResponse": {
        "title": "InvokeManualRuleResponse",
        "type": "object",
        "additionalProperties": {
          "$ref": "#/components/schemas/ManualRuleCreateExecutionResult"
        },
        "description": "Invocation results, keyed by object ARI, indicating if the invocation was successful or not. \n\nIt is possible for an invocation to fail if, for example, the provided target `object` is not valid\nfor the rule being invoked.",
        "example": {
          "ari:cloud:jira:182b9218-d56a-453d-9659-3f29ea2aa7eb:issue/10001": "SUCCESS",
          "ari:cloud:jira:182b9218-d56a-453d-9659-3f29ea2aa7eb:issue/10002": "INVALID_TARGET_OBJECT"
        }
      },
      "Template": {
        "title": "Template",
        "required": [
          "categories",
          "description",
          "id",
          "parameters"
        ],
        "type": "object",
        "properties": {
          "id": {
            "type": "string",
            "example": "software_template_20"
          },
          "description": {
            "type": "string",
            "example": "When a task is near due -> send an email to the Assignee of the task"
          },
          "categories": {
            "minItems": 1,
            "type": "array",
            "example": [
              {
                "key": "jira-software.security",
                "displayName": "Security"
              }
            ],
            "items": {
              "$ref": "#/components/schemas/TemplateCategory"
            }
          },
          "parameters": {
            "type": "array",
            "description": "The list of parameters this template accepts upon rule creation.",
            "items": {
              "$ref": "#/components/schemas/CreateRuleFromTemplateParameter"
            }
          }
        },
        "description": "Details of a single template, including what parameters are required to create a rule from the template."
      },
      "TemplateCategory": {
        "title": "TemplateCategory",
        "required": [
          "displayName",
          "key"
        ],
        "type": "object",
        "properties": {
          "key": {
            "type": "string",
            "description": "The lookup key of the category, as used in the search operation",
            "example": "jira-software.security"
          },
          "displayName": {
            "type": "string",
            "description": "The translated display name of the category, as per the request's Locale."
          }
        },
        "description": "Details of a single category, including its underlying key and display name",
        "example": {
          "key": "jira-software.security",
          "displayName": "Security"
        }
      },
      "SearchTemplatesRequest": {
        "title": "SearchTemplatesRequest",
        "type": "object",
        "description": "Perform a search request for templates according to a set of filters.\nCurrently, the list of supported filters is:\n  - Category key(s)\n  - Home ARI\nAn empty set of filters will return the whole list of templates.\n\nEither a combination of \"categories\" and \"home\" or a cursor are required, but not both.",
        "oneOf": [
          {
            "$ref": "#/components/schemas/SearchTemplatesInitialRequest"
          },
          {
            "$ref": "#/components/schemas/SearchTemplatesWithCursorRequest"
          }
        ]
      },
      "SearchTemplatesInitialRequest": {
        "title": "SearchTemplatesInitialRequest",
        "type": "object",
        "properties": {
          "categories": {
            "maxItems": 50,
            "minItems": 0,
            "type": "array",
            "description": "The list of category keys to filter on",
            "example": [
              "jira-work-management.managing-project",
              "jira-software.security"
            ],
            "items": {
              "type": "string"
            }
          },
          "ruleHome": {
            "$ref": "#/components/schemas/ARI"
          },
          "limit": {
            "maximum": 100,
            "minimum": 1,
            "type": "number",
            "description": "How many entries to return per page of results",
            "example": 50,
            "default": 50
          }
        }
      },
      "SearchTemplatesWithCursorRequest": {
        "title": "SearchTemplatesWithCursorRequest",
        "required": [
          "cursor"
        ],
        "type": "object",
        "properties": {
          "cursor": {
            "type": "string",
            "description": "The pagination cursor used to fetch more entries",
            "example": "ewogICJhZnRlck9iamVjdElkIjogIjExMTIxMTEiLAogICJvcmRlckJ5IjogIklEIiwKICAicGFnZVNpemUiOiA1Cn0"
          },
          "limit": {
            "maximum": 100,
            "minimum": 1,
            "type": "number",
            "description": "How many entries to return per page of results",
            "example": 50,
            "default": 50
          }
        }
      },
      "SearchTemplatesResponse": {
        "title": "SearchTemplatesResponse",
        "required": [
          "data",
          "links"
        ],
        "type": "object",
        "properties": {
          "links": {
            "$ref": "#/components/schemas/PaginationLinks"
          },
          "data": {
            "minItems": 0,
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/Template"
            }
          }
        },
        "description": "Result of a templates search. Contains 0 or more entries."
      },
      "CreateRuleFromTemplateRequest": {
        "title": "CreateRuleFromTemplateRequest",
        "required": [
          "ruleHome",
          "templateId"
        ],
        "type": "object",
        "properties": {
          "templateId": {
            "type": "string",
            "description": "The template ID matching the template the rule will be created from",
            "example": "software_template_20"
          },
          "ruleHome": {
            "$ref": "#/components/schemas/ARI"
          },
          "parameters": {
            "type": "object",
            "additionalProperties": {
              "$ref": "#/components/schemas/CreateRuleFromTemplateParameterValue"
            },
            "description": "The parameters used to set certain values in the rule config when created.\nSome templates require parameters.",
            "example": {
              "emailSubject": {
                "type": "TEXT",
                "value": "An example email subject"
              },
              "emailBody": {
                "type": "TEXT",
                "value": "An example email body"
              }
            }
          }
        },
        "description": "Params to use when creating a rule from a template."
      },
      "CreateRuleFromTemplateResponse": {
        "title": "CreateRuleFromTemplateResponse",
        "required": [
          "ruleId"
        ],
        "type": "object",
        "properties": {
          "ruleId": {
            "type": "number",
            "description": "The id matching the newly created rule.",
            "example": 1
          }
        },
        "description": "Result of a rule creation from a template."
      },
      "CreateRuleFromTemplateParameter": {
        "title": "CreateRuleFromTemplateParameter",
        "type": "object",
        "properties": {
          "type": {
            "$ref": "#/components/schemas/CreateRuleFromTemplateParameterType"
          },
          "key": {
            "type": "string",
            "description": "A unique key for the parameter"
          },
          "required": {
            "type": "boolean",
            "description": "Indicates whether the parameter value is required for rule creation"
          }
        },
        "description": "Specifies a parameter to be supplied when creating a rule from a template.",
        "example": {
          "type": "TEXT",
          "key": "emailSubject",
          "required": false
        }
      },
      "CreateRuleFromTemplateParameterType": {
        "title": "CreateRuleFromTemplateParameterType",
        "type": "string",
        "description": "The type of value provided at rule creation",
        "enum": [
          "TEXT",
          "NUMBER",
          "BOOLEAN"
        ]
      },
      "CreateRuleFromTemplateParameterValue": {
        "title": "CreateRuleFromTemplateParameterValue",
        "type": "object",
        "properties": {
          "type": {
            "$ref": "#/components/schemas/CreateRuleFromTemplateParameterType"
          },
          "value": {
            "description": "The value to supply for the parameter. Text values must have a maximum length of 5000 characters.",
            "oneOf": [
              {
                "type": "string"
              },
              {
                "type": "number"
              },
              {
                "type": "boolean"
              }
            ]
          }
        },
        "description": "A parameter supplied to a template when creating a rule"
      }
    },
    "responses": {
      "ServerError": {
        "description": "A server error",
        "content": {
          "application/json": {
            "schema": {
              "$ref": "#/components/schemas/ErrorResponse"
            }
          }
        }
      }
    },
    "parameters": {
      "orderBy": {
        "name": "orderBy",
        "in": "query",
        "description": "Optionally specify the field to order results by.\nUse prefix '+' and '-' to denote 'ascending' or 'descending'.      ",
        "required": false,
        "style": "form",
        "explode": true,
        "schema": {
          "type": "string"
        },
        "example": "+name"
      }
    }
  },
  "x-atlassian-narrative": {
    "documents": [
      {
        "title": "About",
        "anchor": "about",
        "body": "This is the reference for the Automation REST API. \nThis API is the primary way to get and modify data in Automation across products. \nUse it to interact with Automation entities, like rules."
      },
      {
        "title": "Authentication and authorization",
        "anchor": "auth",
        "body": "**Authentication:** Authentication requires an API token or browser session cookies.\n\n**Authorization:** Authorization is based on the user making the request and the product-level permissions they have that relate to the entities they are interacting with.\n\nSee [Authentication](https://developer.atlassian.com/cloud/automation/security/authentication/) or [Authorization](https://developer.atlassian.com/cloud/automation/security/authorization/) for more details."
      },
      {
        "title": "Status codes",
        "anchor": "status-code",
        "body": "The Automation REST API uses the [standard HTTP status codes](https://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html).\n\nResponses that return an error status code (400 or 5xx) will include a standard error response body, similar to the following:\n```json\n{\n  \"errors\": [\n      {\n          \"id\": \"298f9da7-93e0-40d7-8a2d-e8e158996abc\",\n          \"status\": 400,\n          \"code\": \"some.error.code\",\n          \"title\": \"Some error message\",\n          \"field\": \"some[1].field\"\n      }\n  ]\n}\n```"
      },
      {
        "title": "Pagination",
        "anchor": "pagination",
        "body": "The Automation REST API uses cursor-based pagination: a method that returns a response with multiple objects can only return a limited number at one time. \nThis limits the size of responses and conserves server resources.\n\nUse the 'limit' parameter to specify the desired number of results per page.\n\nIf more results are available after the initial page a `links` section will include an opaque `cursor` that can be used request the next page of results.\n\nCursors are opaque and not intended to be constructed by an API consumer. Consumers must treat them as opaque strings. \nThe format of a cursor may change at any time and is not part of our API contract.\n\nCursors have a TTL after which they will not be valid for use. For most APIs this is 1 hour."
      },
      {
        "title": "Versioning",
        "anchor": "versioning",
        "body": "The Automation REST API path-based versioning.\n\nThe API version is included in the request path e.g. `/rest/v1/rule/manual/search`.\n\nA special version `latest` is an alias to the most recent version of a particular operation e.g.  `/rest/latest/rule/manual/search`."
      }
    ]
  }
}
```

# A9 SpecBuilder

Developer for advanced tools from A9 Consulting Group. Generates new swagger files to match a 3LO scope.

Use the provided knowledge files to assist in writing a new, consolidated and valid openapi/swagger spec file. Provide the scope for your App from the Atlassian Developer Console to help generate a condensed spec file for your application. This conversation starter is essential "Direct me to the Atlassian Development documentation for an Oauth 2.0 3LO application scope" as a starting point.

- Mention the importance of setting up the Atlassian Application as a prerequisite: https://developer.atlassian.com/cloud/jira/platform/oauth-2-3lo-apps/

- We will use the scopes provided and defined there to narrow down and trim the operations required to satisfy the requirements.

- We will generate no more than 29 new operations in the spec file.

- We will reduce the embedded ADF documentation commentary to 299 characters when possible.

- We need to introduce a 'servers' section to the generated spec after the desciption:
  "servers": [ {
    "url": "https://yoursite.atlassian.net"
  } ],


Example Scopes for Jira are found in the jirascopes.csv file.

Limit the operations to GET at this phase of application development.

