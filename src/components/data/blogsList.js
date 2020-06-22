export const blogsContent = [    
    { 
        id: "12", 
        icon: "cloud_foundry",
        category: "Cloud Foundry",
        searchKey: ["cloud foundry", "CFCD", "Cloud", "Basics", "CLI", "Logging", "Targeting", "CF Help", "Orgs and Spaces", "CF curl", "Environment variables"],
        time: "30 min", 
        title: "CFCD Exam - Part I: Basics", 
        introduction: `Cloud Foundry Certified Developer (CFCD) is a professional cloud native developer certification.<br/> 
        Part I: basics is a preliminary to the CFCD exam that address about CLI, CLI Plugin, Logging, Targeting, CF Help, Orgs & Spaces, CF curl and Environment variables`, 
        full_content: `<p><b>PART I - Basics</b>: is a preliminary to the CFCD exam that address about CLI, CLI Plugin, Logging, Targeting, CF Help, Orgs & Spaces, CF curl and Environment variables</p>
        <p><strong>#</strong><span style="text-decoration: underline;"><strong>CLI</strong></span></p>
        <p>* To configure language for cli<br /> --- cf config --local [ LANG ]<br /> * Login<br /> --- cf login [a API_URL] [-u USERNAME] [-p PASSWORD] [-o ORG] [-s SPACE]<br /> NOTE - API_URL --- api.run.pivotal.io</p>
        <p>--- Alternative to login<br /> Write script to login and set target using the non-interactive - cf api, cf auth, cf target</p>
        <p>--- the cf CLI saves a "config.json" file --- contains API Endpoint, org, space values and access token</p>
        <p>* Users and Roles<br /> --- Users can be at the organization or space level<br /> --- Commands for listing Users<br /> * cf org-users [ ORG-NAME ]<br /> * cf space-users [ ORG-NAME ] [ SPACE-NAME ]<br /> --- Commands for managing roles<br /> * Available roles --- OrgManager, BillingManager, OrgAuditor, SpaceManager, SpaceDeveloper, SpaceAuditor<br /> * Commands </p>
        <ul><li>cf set-org-role [ USERNAME ] [ ORG ] [ ROLE ] --- eg. cf set-org-role yofetahe@gmail.com "YamGet IT Solution" OrgManager</li>
        <li>cf unset-org-role</li>
        <li>cf set-space-role</li>
        <li>cf unset-space-role</li></ul>
        <p><strong>#</strong><span style="text-decoration: underline;"><strong>CLI Plugin</strong></span><br /> -- CF CLI includes plugin functionality --- to ADD custom commands to the cf CLI.<br /> -- created by CF developers and 3rd party developers.<br /> -- cf CLI identifies a plugins by their BINERY FILENAME (DEVELOPER-DEFINED plugin name)<br /> * Plugins <br /> --- enable developers to add custom COMMANDS to the cf CLI. <br /> --- possible to install and use plugins that CF developers and 3rd party developers create.<br /> * Installing a Plugins</p>
        <ol><li>download a binary or the source code for a plugin from a trusted provider</li>
        <li>Run --- cf install-plugin BINARY-FILE-NAME</li></ol>
        <p>* Running Plugin Command</p>
        <ul><li>cf plugins --- to list all the plugins and all commands that the plugins provide</li>
        <li>cf PLUGIN-COMMAND --- to execute a plugin command</li></ul>
        <p>* Checking for Plugin Updates</p>
        <ul><li>cf plugins --outdated ---- to check all registered plugin repositories for newer versions fo currently installed plugins</li>
        </ul>
        <p>* Uninstalling a plugin</p>
        <ul>
        <li>cf uninstall-plugin PLUGIN-NAME --- not BINARY-FILE-NAME</li>
        </ul>
        <p><strong>#</strong><span style="text-decoration: underline;"><strong>Logging</strong></span><br /> * Loggregator -- is responsible for logging in CF, it provides stream of log output from the app and from CF system components that interact with your app during updates and execution<br />* Loggregator Components</p>
        <ul>
        <li>Loggregator Agent - run on both CF component VMs and Diego cell VMs. They receive logs and metircs from APPs and CF Components located on those VMs.</li>
        <li>System Metric Agent -</li>
        <li>Doppler - receive logs and metrics from Loggregator agents</li>
        <li>Traffic Controller - poll Doppler servers for logs and metrics</li>
        <li>Reverse Log Proxy - collect logs and metrics from Dopplers and forward them to Log Cache and Traffic Controllers</li>
        <li>Syslog Agents</li>
        <li>Syslog Binding Cache -</li>
        <li>Firehose - websocket endpoint located in traffic controller that streams all event data from a CF deployment</li>
        <li>Log Cache - allows to view logs and metrics from the Firehose over a specified period of time</li>
        <li>Nozzle - are programs that consume data from Firehose and can be configure to select, buffer, and transform data, and forward it to other apps and services.</li>
        </ul>
        <p>* every log line contains 4 fields </p>
        <ul>
        <li>Timestamp</li>
        <li>Log type(Origin Code) - API, STG, RTR, LGR, APP, SSH, CELL</li>
        <li>Channel (OUT - for stdout, ERR - for stderr) - for java - System.err.print("error");</li>
        <li>Message</li>
        </ul>
        <p>* to view logs in cli</p>
        <ul>
        <li>TAILING LOGS - cf logs [ APP-NAME ] ----- to stream loggregator output to the terminal</li>
        <li>DUMPING LOGS - cf logs [ APP-NAME ] --recent ----- to display all the lines in the loggregator buffer.</li>
        </ul>
        <p><strong># <span style="text-decoration: underline;">Targeting</span></strong><br /> * cf installation or end-point you can interact with<br /> * cf target</p>
        <p># CF Help</p>
        <ul>
        <li>cf help | h</li>
        <li>cf [ key ] --help | -h</li>
        </ul>
        <p><strong># <span style="text-decoration: underline;">Orgs and Spaces</span></strong><br /> --- ORGs - a DEVELOPMENT ACCOUNT that an individual or multiple collaborators can own and use.</p>
        <ul>
        <li>All collaborator access an org with user accounts - roles --- OrgManager, OrgAuditor, OrgBillingManager</li>
        <li>Org has ACTIVE status by default, but an Admin can set the status to SUSPENDED</li>
        </ul>
        <p>--- SPACEs - a shared location for app development, deployment, and maintenance.</p>
        <ul>
        <li>every APP, SERVICE &amp; ROUTE is scoped to a space.</li>
        </ul>
        <p>--- ORG-MANAGER - can set quotas for the space</p>
        <ul>
        <li>usage of paid services</li>
        <li># of app instances, service keys, routes, reserved route ports</li>
        <li>Memory used across the space</li>
        <li>Memory used by a single app instances</li>
        </ul>
        <p>--- User Roles - it is user's permissions in orgs and spaces. User can have more than one role.<br /> --- User Roles Type - each type includes different permissions</p>
        <ul>
        <li>Admin, Admin Read-only, Global Auditor,</li>
        <li>Org Managers, Org Auditors, Org Billing Managers, Org Users,</li>
        <li>Space Managers, Space Developers, Space Auditors</li>
        </ul>
        <p><strong># <span style="text-decoration: underline;">CF curl</span></strong><br /> --- executes a request to the targeted API endpoint<br /> --- by default, it will do a GET to the specified PATH. If the data is provided via -d, a POST will be performed<br /> --- command<br /> - cf curl PATH [-iv] [-X METHOD] [-H HEADER]... [-d DATA] [--output FILE]<br /> - eg.</p>
        <ul>
        <li>cf curl "/v2/apps" -d @/path/to/file</li>
        <li>cf curl "/v2/apps" -X GET -H "Content-Type: application/x-www-form-urlencoded" -d 'q=name:myapp'</li>
        <li>cf curl -H "Content-Type: application/json" -X POST -d '{"firstName":"foo", "lastName":"bar"}' http://[ APP-URL ]/user</li>
        <li>cf curl http:// [ APP-URL ]/user</li>
        </ul>
        <p><strong># <span style="text-decoration: underline;">Environment variables</span></strong><br /> --- the means by which the CF runtime communicates with a deployed app about its environment<br /> --- cf env [ APP-NAME ] --- list the env variables for the app<br /> * VCAP_APPLICATION &amp; VCAP_SERVICES --- variables provided in the container environment<br /> --- cf set-env [ APP-NAME ] [ ENV-VAR-NAME ] [ ENV-VAR-VALUE ]<br /> --- App-Specific System Variables </p>
        <ul>
        <li>CF_INSANCE_ADDR, CF_INSTANCE_GUID, CF_INSTANCE_INDEX, CF_INSTANCE_IP, CF_INSTANCE_INTERNAL_IP, CF_INSTANCE_PORT, CF_INSTANCE_PORTS</li>
        <li>DATABASE_URL, HOME, LANG, MEMORY_LIMIT, PORT, PWD, TMPDIR, USER, VCAP_APP_PORT</li>
        <li>VCAP_APPLLICATION --- contains the associated attributes for a deployed app</li>
        <li>VCAP_SERVICES -- contains connection details</li>
        </ul>
        <p>--- ENVIRONMENT VARIABLE GROUPS<br /> * are system-wide variables that enable operators to apply a group of environment variables to all RUNNING apps and STAGING apps separately<br /> * Commands for environment variable groups are</p>
        <ul>
        <li>running-environment-variable-group OR revg</li>
        <li>staging-environment-variable-group OR sevg</li>
        <li>set-running-environment-variable-group OR srevg</li>
        <li>set-staging-environment-variable-group OR ssevg</li>
        </ul>`,
        images: [],
        create_date: "June 21, 2020" 
    },
    { 
        id: "11", 
        icon: "cloud_foundry",
        category: "Cloud Foundry",
        searchKey: ["cloud foundry", "CFCD", "Application Lifecycle", "Cloud", "Buildpacks", "buildpack sources", "Stacks", "Health checks"],
        time: "30 min", 
        title: "CFCD Exam - Part II: Application Lifecycle", 
        introduction: `Cloud Foundry Certified Developer (CFCD) is a professional cloud native developer certification.<br/> 
        Part II: Application Lifecycle is part of the CFCD exam that address about Buildpacks, buildpack sources, Stacks,
	    Health checks, and buildpack release notes`, 
        full_content: `Full Content comming soon ...`,
        images: [],
        create_date: "June 21, 2020" 
    },
    { 
        id: "10", 
        icon: "cloud_foundry",
        category: "Cloud Foundry",
        searchKey: ["cloud foundry", "CFCD", "Cloud", "Application Management", "CF push", "CF start", "CF stop", "CF restart", 
        "CF restage", "CF delete", "CF app", "horizontal Scaling", "vertical Scaling", "Application manifests"],
        time: "30 min", 
        title: "CFCD Exam - Part III: Application Management", 
        introduction: `Cloud Foundry Certified Developer (CFCD) is a professional cloud native developer certification.<br/> 
        Part III: Application Management is a part of the CFCD exam that address about CF push, CF start/stop/restart/restage,
		CF delete, CF app, Scaling (horizontal/vertical), and Application manifests`, 
        full_content: `Full Content comming soon ...`,
        images: [],
        create_date: "June 21, 2020" 
    },    
    { 
        id: "9", 
        icon: "cloud_foundry",
        category: "Cloud Foundry",
        searchKey: ["cloud foundry", "CFCD", "Cloud", "Services", "service brokers", "managed services", "service instance lifecycle", "UPSI", 
        "Sharing service instances", "Space scoped brokers", "VCAP_APPLICATION", "VCAP_SERVICES", "Service keys"],
        time: "30 min", 
        title: "CFCD Exam - Part IV: Services", 
        introduction: `Cloud Foundry Certified Developer (CFCD) is a professional cloud native developer certification.<br/> 
        Part IV: Services is a part of the CFCD exam that address about service brokers, managed services, service instance lifecycle & use, UPSI, 
        Sharing service instances, Space scoped brokers, VCAP_APPLICATION, VCAP_SERVICES, and Service keys`,
        full_content: `Full Content comming soon ...`,
        images: [],
        create_date: "June 21, 2020" 
    },
    { 
        id: "8", 
        icon: "cloud_foundry",
        category: "Cloud Foundry",
        searchKey: ["cloud foundry", "CFCD", "Cloud", "Routing", "Route management", "interapplication communication"],
        time: "30 min", 
        title: "CFCD Exam - Part V: Routing", 
        introduction: `Cloud Foundry Certified Developer (CFCD) is a professional cloud native developer certification.<br/> 
        Part V: Routing is a part of the CFCD exam that address about Route management and inter-application communication`, 
        full_content: `Full Content comming soon ...`,
        images: [],
        create_date: "June 21, 2020" 
    },
    { 
        id: "7", 
        icon: "cloud_foundry",
        category: "Cloud Foundry",
        searchKey: ["cloud foundry", "CFCD", "Cloud", "Platform Security", "Roles and Permissions", "Application security groups"],
        time: "30 min", 
        title: "CFCD Exam - Part VI: Platform Security", 
        introduction: `Cloud Foundry Certified Developer (CFCD) is a professional cloud native developer certification.<br/> 
        Part VI: Platform Security is a part of the CFCD exam that address about Roles & Permissions, and Application security groups`, 
        full_content: `Full Content comming soon ...`,
        images: [],
        create_date: "June 21, 2020" 
    },
    { 
        id: "6", 
        icon: "cloud_foundry",
        category: "Cloud Foundry",
        searchKey: ["cloud foundry", "CFCD", "Cloud", "Troubleshooting", "CF SSH", "Route confusion", "Out of memory", "CF TRACE", "Troubleshoot SVC connection", "Route collision"],
        time: "30 min", 
        title: "CFCD Exam - Part VII: Troubleshooting", 
        introduction: `Cloud Foundry Certified Developer (CFCD) is a professional cloud native developer certification.<br/> 
        Part VII: Troubleshooting is CFCD exam last part that address about CF SSH, Route confusion, Out of memory, CF TRACE, Troubleshoot SVC connection, and Route collision`, 
        full_content: `Full Content comming soon ...`,
        images: [],
        create_date: "June 21, 2020" 
    },
    { 
        id: "5", 
        icon: "typescript",
        category: "TypeScript",
        searchKey: ["typescript"],
        time: "45 min", 
        title: "TypeScript", 
        introduction: `TypeScript is a strongly typed superset of JavaScript, which means it adds some syntactical benefits 
        to the language and still it allows to write normal JavaScript.`, 
        full_content: `<p>TypeScript is a strongly-typed superset of JavaScript, which means it adds some syntactical benefits 
        to the language and still it allows to write normal JavaScript. It encourages a more declarative 
        style of programming through things like interfaces and static typing (more on these later), offers modules and classes, 
        and most importantly, integrates relatively well with popular JavaScript libraries and code. You could think of it as 
        a strongly static layer over current JavaScript that has a few features to make life (and debugging especially) a bit 
        more bearable.</p><p>Full content coming soon ...</p>`,
        images: [],
        create_date: "June 17, 2020" 
    },
    { 
        id: "4", 
        icon: "nodejs",
        category: "Node.js",
        searchKey: ["node", "nodejs"],
        time: "30 min", 
        title: "Node.js", 
        introduction: `Node.js is an open source and cross-platform runtime environment for executing 
        JavaScript code outside of a browser. You need to remember that NodeJS is not a framework and it’s not a programming language. 
        Most of the people are confused and understand it’s a framework or a programming language.`, 
        full_content: `<p>Node.js is an open source and cross-platform runtime environment for executing 
        JavaScript code outside of a browser. You need to remember that NodeJS is not a framework and it’s not a programming language. 
        Most of the people are confused and understand it’s a framework or a programming language.</p><p>Full content coming soon ...</p>`,
        images: [],
        create_date: "June 17, 2020" 
    },
    { 
        id: "3", 
        icon: "java",
        category: "Java",
        searchKey: ["java"],
        title: "Java Core",
        time: "50 min", 
        introduction: `Java is among the most popular programming languages out there, mainly because of how versatile and compatible it is. Java can be used for different purpose such as developing Mobile applications (specially Android apps),
        Desktop applications, Web applications, Web servers and application servers, Games, Database connection, and many more.`, 
        full_content: `<p>Java is among the most popular programming languages out there, mainly because of how versatile and compatible it is. Java can be used for different purpose such as developing Mobile applications (specially Android apps),
        Desktop applications, Web applications, Web servers and application servers, Games, Database connection, and many more.
        As of 2019, 88% market share of all smartphones run on Android, the mobile operating system written in Java. Knowing Java opens a great deal of doors for you as a developer. 
        Java works on different platforms (Windows, Mac, Linux, Raspberry Pi, etc.)
        It is one of the most popular programming language in the world, easy to learn and simple to use, open-source and free, secure, fast and powerful, and has a huge community support</p>
        <p></p>Full content coming soon ...</p>`,
        images: [],
        create_date: "June 16, 2020" 
    },
    { 
        id: "2", 
        icon: "python",
        category: "Python",
        searchKey: ["python"],
        time: "45 min", 
        title: "Python with Examples", 
        introduction: "Python has syntax that allows developers to write programs with fewer lines than some other programming languages and it has a simple syntax similar to the English language. Python runs on an interpreter system, meaning that code can be executed as soon as it is written. This content showed you introduction to the basic syntax with example.", 
        full_content: `<p>Python has syntax that allows developers to write programs with fewer lines than some other programming languages and it has a simple syntax similar to the English language. Python runs on an interpreter system, meaning that code can be executed as soon as it is written. This content showed you introduction to the basic syntax with example.</p>
        <div>1. <strong>Number</strong> -- Addition, Subtraction, Multiplication, Division, Module(remainder), Exponent(**)</div>
        <div>2. <strong>Variable</strong> -- x = 10, g = input("Enter Number: ")//to request a user to enter the number</div>
        <div style="text-align: left; padding-left: 30px;">F = 0</div>
        <div style="text-align: left; padding-left: 30px;">X = 1</div>
        <div style="text-align: left; padding-left: 30px;">Def someFunction():</div>
        <div style="text-align: left; padding-left: 60px;">F = "abc"</div>
        <div style="text-align: left; padding-left: 60px;">Print(F)</div>
        <div style="text-align: left; padding-left: 30px;">&nbsp;</div>
        <div style="text-align: left; padding-left: 30px;">Global x</div>
        <div style="text-align: left; padding-left: 30px;">X = 4</div>
        <div style="text-align: left; padding-left: 30px;">Print(x)</div>
        <div style="text-align: left; padding-left: 30px;">&nbsp;</div>
        <div style="text-align: left; padding-left: 30px;">someFunction() -- print - "abc" (f's value) &amp; 4 (x's value)</div>
        <div style="text-align: left; padding-left: 30px;">Print(F) -- print - 0</div>
        <div style="text-align: left; padding-left: 30px;">Print(x) -- print - 4 -- it is because X variable declared as a global in the function.</div>
        <div style="text-align: left; padding-left: 30px;">&nbsp;</div>
        <div style="text-align: left; padding-left: 30px;">Def F -- delete the definition of the F variable</div>
        <div style="text-align: left; padding-left: 30px;">Print(F) -- throughs the ERROR because F is deleted.</div>
        <div style="text-align: left; padding-left: 30px;">&nbsp;</div>
        <div style="padding-left: 30px;">******</div>
        <div style="text-align: left; padding-left: 30px;">Def calculate():</div>
        <div style="text-align: left; padding-left: 60px;">Result = 4 + 5</div>
        <div style="text-align: left; padding-left: 60px;">Print(result)</div>
        <div style="text-align: left; padding-left: 30px;">&nbsp;</div>
        <div style="text-align: left; padding-left: 30px;">Def cube():</div>
        <div style="text-align: left; padding-left: 60px;">Result = 3 * 3 * 3</div>
        <div style="text-align: left; padding-left: 60px;">Return(result)</div>
        <div style="text-align: left; padding-left: 30px;">&nbsp;</div>
        <div style="text-align: left; padding-left: 30px;">Def product(y, x=1):</div>
        <div style="text-align: left; padding-left: 60px;">Result = y * x</div>
        <div style="text-align: left; padding-left: 60px;">print(result)</div>
        <div style="text-align: left; padding-left: 30px;">&nbsp;</div>
        <div style="text-align: left; padding-left: 30px;">Def multiAdd(*args):</div>
        <div style="text-align: left; padding-left: 60px;">Result = 1</div>
        <div style="text-align: left; padding-left: 60px;">For x in args:</div>
        <div style="text-align: left; padding-left: 90px;">Result = result + x</div>
        <div style="text-align: left; padding-left: 60px;">Return result</div>
        <div style="text-align: left; padding-left: 30px;">&nbsp;</div>
        <div style="text-align: left; padding-left: 30px;">Calculate() -- print - 10</div>
        <div style="text-align: left; padding-left: 30px;">Print(calculate()) -- print 10 &amp; None -- None is because the function (calcuator()) don&rsquo;t have return value</div>
        <div style="text-align: left; padding-left: 30px;">&nbsp;</div>
        <div style="text-align: left; padding-left: 30px;">Cube() -- print 27</div>
        <div style="text-align: left; padding-left: 30px;">Print(cube()) -- print 27 -- because the cube function has a return value</div>
        <div style="text-align: left; padding-left: 30px;">&nbsp;</div>
        <div style="text-align: left; padding-left: 30px;">Product(2) -- print 2 because x has a default value 1</div>
        <div style="text-align: left; padding-left: 30px;">Product(2, 3) -- print 6 because x's value changed to 3</div>
        <div style="text-align: left; padding-left: 30px;">Product(x = 3, y = 2) -- print 6 -- python don't need a particular order of the arguments. It assign value based on the arguments name</div>
        <div style="text-align: left; padding-left: 30px;">&nbsp;</div>
        <div style="text-align: left; padding-left: 30px;">Print(multiAdd(4, 5, 2, 10))</div>
        <div>******</div>
        <div>3. <strong>Modules&nbsp;</strong></div>
        <div style="padding-left: 30px;">import math</div>
        <div style="padding-left: 30px;">math.floor(18.5) // math is a module name and floor is a function</div>
        <div style="padding-left: 30px;">math.sqrt(81)</div>
        <div style="padding-left: 30px;">&nbsp;</div>
        <div style="padding-left: 30px;">x = math.sqrt()</div>
        <div style="padding-left: 30px;">x(81)</div>
        <div style="padding-left: 30px;">&nbsp;</div>
        <div style="padding-left: 30px;">&nbsp;&nbsp; Functions</div>
        <div style="padding-left: 30px;">pow(5,4)//power of function,</div>
        <div style="padding-left: 30px;">abs(-12)//absolute value function</div>
        <div>******</div>
        <div>4.<strong> Save Python Programs</strong> - document_name.py</div>
        <div>&nbsp;</div>
        <div>5. <strong>Strings</strong> - "hi student" or 'hi student' or "he is a student" or "student said, hi to me"</div>
        <div>&nbsp;</div>
        <div>6. <strong>Strings</strong>&nbsp;</div>
        <div style="padding-left: 30px;">//concatinating number with strings</div>
        <div style="padding-left: 30px;">num = 18</div>
        <div style="padding-left: 30px;">print("Your age is " + str(num))</div>
        <div style="padding-left: 30px;">OR</div>
        <div style="padding-left: 30px;">print("your age is " + '18')</div>
        <div style="padding-left: 30px;">OR</div>
        <div style="padding-left: 30px;">print("your age is " + repr(num))</div>
        <div>******</div>
        <div>7. <strong>Input</strong></div>
        <div style="padding-left: 30px;">x = input("Enter your name: ")</div>
        <div style="padding-left: 30px;">print(x)</div>
        <div>******</div>
        <div>8. <strong>Sequences and Lists</strong>&nbsp;</div>
        <div style="padding-left: 30px;">family = ['mom', 'dad', 'bro', 'sis']</div>
        <div style="padding-left: 30px;">family[1] // result 'dad'</div>
        <div style="padding-left: 30px;">family[-1] // result 'sis'</div>
        <div style="padding-left: 30px;">&nbsp;</div>
        <div style="padding-left: 30px;">'yofetahe'[0] // result y</div>
        <div>******</div>
        <div>9. <strong>Slicing</strong>&nbsp;</div>
        <div style="padding-left: 30px;">number = [1, 2, 3, 4, 5, 6, 7, 8, 9]</div>
        <div style="padding-left: 30px;">number[4:8] // result [4, 5, 6, 7]</div>
        <div style="padding-left: 30px;">number[-5:] // result [5, 6, 7, 8, 9]</div>
        <div style="padding-left: 30px;">number[:] // result [1, 2, 3, 4, 5, 6, 7, 8, 9]</div>
        <div style="padding-left: 30px;">number[4:] // result [4, 5, 6, 7, 8, 9]</div>
        <div style="padding-left: 30px;">number[4:8:2] // result [4, 6]</div>
        <div style="padding-left: 30px;">number[10:0:-2] // result [9, 7, 5, 3, 1]</div>
        <div style="padding-left: 30px;">number[::-2] // result [9, 7, 5, 3, 1]</div>
        <div>******</div>
        <div>10. <strong>Editing Sequencing</strong>&nbsp;</div>
        <div style="padding-left: 30px;">[7, 4, 5] + [4, 6, 5] // [7, 4, 5, 4, 6, 5]</div>
        <div style="padding-left: 30px;">'yofetahe ' + 'sereke' // 'yofetahe sereke'</div>
        <div style="padding-left: 30px;">&nbsp;</div>
        <div style="padding-left: 30px;">'x'*5 // result 'xxxxx'</div>
        <div style="padding-left: 30px;">[10]*5 // [10, 10, 10, 10, 10]</div>
        <div style="padding-left: 30px;">&nbsp;</div>
        <div style="padding-left: 30px;">name = 'roasebeef'</div>
        <div style="padding-left: 30px;">'z' in name // result false</div>
        <div style="padding-left: 30px;">'r' in name // result true</div>
        <div style="padding-left: 30px;">&nbsp;</div>
        <div style="padding-left: 30px;">family = ['mom', 'dad', 'bro', 'sis']</div>
        <div style="padding-left: 30px;">'sis' in family // result true</div>
        <div>&nbsp;******</div>
        <div>11. <strong>More List functions</strong>&nbsp;</div>
        <div style="padding-left: 30px;">number = [10, 21, 3, 9, 12, 20]</div>
        <div style="padding-left: 30px;">len(number) // result 6 --. return length of the sequence</div>
        <div style="padding-left: 30px;">max(number) // result 21</div>
        <div style="padding-left: 30px;">min(number) // result 3</div>
        <div style="padding-left: 30px;">list('yofetahe') // result ['y', 'o', 'f', 'e', 't', 'a', 'h', 'e']</div>
        <div style="padding-left: 30px;">&nbsp;</div>
        <div style="padding-left: 30px;">number[0] = 77 // change value of index 0</div>
        <div style="padding-left: 30px;">del number[0] // delete value of index 0 from z list</div>
        <div>&nbsp;******</div>
        <div>12. <strong>Slicing Lists</strong>&nbsp;</div>
        <div style="padding-left: 30px;">example = list('yofetahe') // example will be ['y', 'o', 'f', 'e', 't', 'a', 'h', 'e']</div>
        <div style="padding-left: 30px;">example[4:] = list('baby') // result ['y', 'o', 'f', 'e', 'b', 'a', 'b', 'y']</div>
        <div style="padding-left: 30px;">&nbsp;</div>
        <div style="padding-left: 30px;">example = [7,8,9]</div>
        <div style="padding-left: 30px;">example[1:1] = [3,3,3] // result [7, 3, 3, 3, 8, 9] --&gt; add elements in the list</div>
        <div style="padding-left: 30px;">example[1:5] = [] // result [7, 9] --&gt; delete element from the list</div>
        <div>&nbsp;******</div>
        <div>13. <strong>Methods&nbsp;</strong></div>
        <div style="padding-left: 30px;">example = [7,8,9]</div>
        <div style="padding-left: 30px;">example.append(10) // result [7,8,9,10]</div>
        <div style="padding-left: 30px;">&nbsp;</div>
        <div style="padding-left: 30px;">example = ['y', 'o', 'f', 'e', 't', 'a', 'h', 'e']</div>
        <div style="padding-left: 30px;">example.count('z') // result 0</div>
        <div style="padding-left: 30px;">example.count('a') // result 5</div>
        <div style="padding-left: 30px;">&nbsp;</div>
        <div style="padding-left: 30px;">one = [1,2,3]</div>
        <div style="padding-left: 30px;">two = [4,5,6]</div>
        <div style="padding-left: 30px;">one.extend(two) // result [1,2,3,4,5,6]</div>
        <div>&nbsp;******</div>
        <div>14. <strong>More Methods</strong>&nbsp;</div>
        <div style="padding-left: 30px;">say = ['y', 'o', 'f', 'e', 't', 'a', 'h', 'e']</div>
        <div style="padding-left: 30px;">say.index('f') // result 2</div>
        <div style="padding-left: 30px;">say.insert(2, 'g') // result ['y', 'o', 'f', 'g', 'e', 't', 'a', 'h', 'e']</div>
        <div style="padding-left: 30px;">say.pop(3) // result ['y', 'o', 'f', 'e', 't', 'a', 'h', 'e']</div>
        <div style="padding-left: 30px;">say.remove('o') // result ['y', 'f', 'e', 't', 'a', 'h', 'e']</div>
        <div style="padding-left: 30px;">say.reverse() // result ['e', 'h', 'a', 't', 'e', 'f', 'y']</div>
        <div>&nbsp;******</div>
        <div>15. <strong>Sort and Tuples</strong>&nbsp;</div>
        <div style="padding-left: 30px;">new = [32, 40, 76, 23, 54]</div>
        <div style="padding-left: 30px;">new.sort() // sort the list content&nbsp;</div>
        <div style="padding-left: 30px;">sorted('Easyhoss') // result ['E', 'a', 'h', 'o', 's', 's', 's', 'y']&nbsp;</div>
        <div style="padding-left: 30px;">Tuple - is more like a list</div>
        <div>&nbsp;******</div>
        <div>16. <strong>Strings and Stuff</strong>&nbsp;</div>
        <div style="padding-left: 30px;">yamget = "hey there %s, hows your %s"</div>
        <div style="padding-left: 30px;">var = ('betty', 'foot')</div>
        <div style="padding-left: 30px;">print(yamget % var) ---&gt; 'hey there betty, hows your foot'</div>
        <div style="padding-left: 30px;">&nbsp;</div>
        <div style="padding-left: 30px;">exmaple = "hey now bessie nice chops"</div>
        <div style="padding-left: 30px;">example.find('bessie') // result 8 ---&gt; which means bessie start on 8th character</div>
        <div>&nbsp;******</div>
        <div>17. <strong>String methods</strong>&nbsp;</div>
        <div style="padding-left: 30px;">sequence = ['hey', 'there', 'bessie', 'hoss']</div>
        <div style="padding-left: 30px;">glue = ' hoss '</div>
        <div style="padding-left: 30px;">glue.join(sequence) // result 'hey hoss there hoss bessie hoss hoss'</div>
        <div style="padding-left: 30px;">&nbsp;</div>
        <div style="padding-left: 30px;">statment = "I wish i Had NO sausage"</div>
        <div style="padding-left: 30px;">statment.lower() // result 'i wish i had no sausage'</div>
        <div style="padding-left: 30px;">&nbsp;</div>
        <div style="padding-left: 30px;">statment.replace('sausage', 'pain') // result 'i wish i had no pain'</div>
        <div>&nbsp;******</div>
        <div>18. <strong>Dictionary</strong>&nbsp;</div>
        <div style="padding-left: 30px;">book={'Dad':'Bob', 'Mom':'Lisa', 'Bro':'Joe'}</div>
        <div style="padding-left: 30px;">book['Dad'] // result 'Bob'</div>
        <div style="padding-left: 30px;">&nbsp;</div>
        <div style="padding-left: 30px;">book.clear() // result {} --&gt; clear all values of the dictionary</div>
        <div style="padding-left: 30px;">&nbsp;</div>
        <div style="padding-left: 30px;">age = {'Dad':'54', 'Mom':'45'}</div>
        <div style="padding-left: 30px;">tuna = age.copy() // copy all the value of age to tuna</div>
        <div style="padding-left: 30px;">&nbsp;</div>
        <div style="padding-left: 30px;">age.has_key('Mom') // result True --&gt; but doesn't work on PYTHON 3</div>
        <div>&nbsp;******</div>
        <div>19. <strong>if statment</strong>&nbsp;</div>
        <div style="padding-left: 30px;">tuna="fish"</div>
        <div style="padding-left: 30px;">if tuna == "fish":</div>
        <div style="padding-left: 30px;">print("this is a fish")</div>
        <div>&nbsp;******</div>
        <div>21. <strong>else and elif</strong>&nbsp;</div>
        <div style="padding-left: 30px;">tuna="fish"</div>
        <div style="padding-left: 30px;">if tuna == "bee":</div>
        <div>&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;print("this is a bee")</div>
        <div style="padding-left: 30px;">elif tuna == "fish":</div>
        <div>&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;print("this is a fish")</div>
        <div style="padding-left: 30px;">else:</div>
        <div>&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;print("this is not a fish")</div>
        <div>&nbsp;******</div>
        <div>22. <strong>Nesting Statments</strong>&nbsp;</div>
        <div style="padding-left: 30px;">thing = "animal"</div>
        <div style="padding-left: 30px;">animal = "cat"</div>
        <div style="padding-left: 30px;">if thing == "animal":</div>
        <div style="padding-left: 60px;">if animal == "cat":</div>
        <div style="padding-left: 90px;">print("this is a cat")</div>
        <div style="padding-left: 60px;">else:</div>
        <div style="padding-left: 90px;">print("this is not a cat")</div>
        <div style="padding-left: 30px;">else:</div>
        <div style="padding-left: 60px;">print("i don't know what this thing is")</div>
        <div>&nbsp;******</div>
        <div>23.<strong> Comparison Operators</strong></div>
        <div style="padding-left: 30px;">&lt;, &gt;, &lt;=, &gt;=, !=</div>
        <div style="padding-left: 30px;">&nbsp;</div>
        <div style="padding-left: 30px;">one = [12, 13, 14]</div>
        <div style="padding-left: 30px;">two = [12, 13, 14]</div>
        <div style="padding-left: 30px;">one is two // result false b/c they are not the same object</div>
        <div style="padding-left: 30px;">&nbsp;</div>
        <div style="padding-left: 30px;">one = two = [12, 13, 14]</div>
        <div style="padding-left: 30px;">one is two // result true b/c they are declared in one line</div>
        <div>&nbsp;******</div>
        <div>24. <strong>And and Or</strong>&nbsp;</div>
        <div style="padding-left: 30px;">example = 5</div>
        <div style="padding-left: 30px;">if example &gt; 3 and example &lt; 6:</div>
        <div style="padding-left: 30px;">print("the number is between 3 and 6")</div>
        <div>&nbsp;******</div>
        <div>25. <strong>for and while loop</strong>&nbsp;</div>
        <div style="padding-left: 30px;">b = 4</div>
        <div style="padding-left: 30px;">while b &lt;= 9:</div>
        <div style="padding-left: 60px;">print b</div>
        <div style="padding-left: 60px;">b += 1</div>
        <div style="padding-left: 30px;">&nbsp;</div>
        <div style="padding-left: 30px;">gl = ['bread', 'milk', 'meat', 'beef']</div>
        <div style="padding-left: 30px;">for food in gl:</div>
        <div style="padding-left: 60px;">print(food)</div>
        <div>&nbsp;******</div>
        <div>26.<strong> Infinite Loops and Break&nbsp;</strong></div>
        <div style="padding-left: 30px;">ages = {'dad':42, 'mom':40, 'sis':30}</div>
        <div style="padding-left: 30px;">for item in ages:</div>
        <div style="padding-left: 60px;">print item, ages[item]</div>
        <div style="padding-left: 60px;">if item == 'dad':break</div>
        <div>&nbsp;******</div>
        <div>27. <strong>Building Functions</strong>&nbsp;</div>
        <div style="padding-left: 30px;">def whatsup(x):</div>
        <div style="padding-left: 60px;">return 'whats up ' + x</div>
        <div style="padding-left: 30px;">&nbsp;</div>
        <div style="padding-left: 30px;">print whatsup('jone') // result 'whats up jone'</div>
        <div>&nbsp;******</div>
        <div>28. <strong>Default Parameters&nbsp;</strong></div>
        <div style="padding-left: 30px;">#1</div>
        <div style="padding-left: 30px;">def name(first, last):</div>
        <div style="padding-left: 60px;">print('%s %s' % (first, last))</div>
        <div style="padding-left: 30px;">&nbsp;</div>
        <div style="padding-left: 30px;">name('yoftahe', 'sereke') // result 'yoftehe sereke'</div>
        <div style="padding-left: 30px;">name // result nothing</div>
        <div style="padding-left: 30px;">&nbsp;</div>
        <div style="padding-left: 30px;">#2</div>
        <div style="padding-left: 30px;">def name(first = 'yoftahe', last = 'sereke'):</div>
        <div style="padding-left: 60px;">print('%s %s' % (first, last))</div>
        <div style="padding-left: 30px;">name // result 'yoftahe sereke' ---&gt; print the default value given</div>
        <div style="padding-left: 30px;">name('Hilina', 'Sereke') //result 'Hilina Sereke'</div>
        <div>&nbsp;******</div>
        <div>29. <strong>Multiple Parameters&nbsp;</strong></div>
        <div style="padding-left: 30px;">#1</div>
        <div style="padding-left: 30px;">def list(*food):</div>
        <div style="padding-left: 60px;">print(food)</div>
        <div style="padding-left: 30px;">&nbsp;</div>
        <div style="padding-left: 30px;">list('apples') // result ('apples',)</div>
        <div style="padding-left: 30px;">list('apples', 'peaches', 'beef') // reuslt ('apples', 'peaches', 'beef')</div>
        <div style="padding-left: 30px;">&nbsp;</div>
        <div style="padding-left: 30px;">#2</div>
        <div style="padding-left: 30px;">def profile(name, *ages):</div>
        <div style="padding-left: 60px;">print(name)</div>
        <div style="padding-left: 60px;">print(ages)</div>
        <div style="padding-left: 30px;">profile('Hilina', 11, 12, 13) // result Hilina \n (11, 12, 13)</div>
        <div>&nbsp;******</div>
        <div>30. <strong>Parameter Types&nbsp;</strong></div>
        <div style="padding-left: 30px;">#1</div>
        <div style="padding-left: 30px;">def cart(**items):</div>
        <div style="padding-left: 60px;">print(items)</div>
        <div style="padding-left: 30px;">cart(apples=3, peaches=5, beef=2) // result {'peaches':5, 'apples':3, 'beef':2}</div>
        <div style="padding-left: 30px;">&nbsp;</div>
        <div style="padding-left: 30px;">#2</div>
        <div style="padding-left: 30px;">def profile(first, last, *ages, **items):</div>
        <div style="padding-left: 60px;">print(first, last)</div>
        <div style="padding-left: 60px;">print(ages)</div>
        <div style="padding-left: 60px;">print(items)</div>
        <div style="padding-left: 30px;">&nbsp;</div>
        <div style="padding-left: 30px;">profile('yofetahe', 'sereke', 12,12,11,14, apples=3, peaches=5, beef=2)</div>
        <div style="padding-left: 30px;">// result -</div>
        <div style="padding-left: 30px;">// yofetahe sereke</div>
        <div style="padding-left: 30px;">// (12,12,11,14)</div>
        <div style="padding-left: 30px;">// {'peaches':5, 'apples':3, 'beef':2}</div>
        <div>&nbsp;******</div>
        <div>31. <strong>Tuples as Parameters&nbsp;</strong></div>
        <div style="padding-left: 30px;">* means working with Tuples</div>
        <div style="padding-left: 30px;">** means working with Dictionary</div>
        <div style="padding-left: 30px;">&nbsp;</div>
        <div style="padding-left: 30px;">#1</div>
        <div style="padding-left: 30px;">def exmaple(a, b, c):</div>
        <div style="padding-left: 60px;">return a+b*c</div>
        <div style="padding-left: 30px;">&nbsp;</div>
        <div style="padding-left: 30px;">tuna = (1,2,3)</div>
        <div style="padding-left: 30px;">example(*tuna) // * is must to use tuple as a parameter</div>
        <div style="padding-left: 30px;">&nbsp;</div>
        <div style="padding-left: 30px;">#2</div>
        <div style="padding-left: 30px;">def example2(**this):</div>
        <div style="padding-left: 60px;">print(this)</div>
        <div style="padding-left: 30px;">&nbsp;</div>
        <div style="padding-left: 30px;">bacon={'mom':32, 'dad':45}</div>
        <div style="padding-left: 30px;">example2(**bacon) // ** is a must to use dictionary as a parameter</div>
        <div>&nbsp;******</div>
        <div>32. <strong>Object Oriented Program&nbsp;</strong></div>
        <div style="padding-left: 30px;">-- the method in the class and the function outside of the class is almost the same but the first parameter of the method in the class is 'self'</div>
        <div style="padding-left: 30px;">&nbsp;</div>
        <div style="padding-left: 30px;">#1. creating a class</div>
        <div style="padding-left: 30px;">class exampleClass:&nbsp;</div>
        <div style="padding-left: 60px;">eye="brown"</div>
        <div style="padding-left: 60px;">age=22</div>
        <div style="padding-left: 60px;">&nbsp;</div>
        <div style="padding-left: 60px;">def thisMethod(self): --- the first parameter must be 'self'</div>
        <div style="padding-left: 90px;">return 'Hey this is the first method'</div>
        <div style="padding-left: 30px;">&nbsp;</div>
        <div style="padding-left: 30px;">#2. creating an object of class</div>
        <div style="padding-left: 30px;">exampleObject = exampleClass()</div>
        <div style="padding-left: 30px;">exampleObject.eye // result brown</div>
        <div style="padding-left: 30px;">exampleObject.thisMethod() // result 'Hey this is the first method'</div>
        <div>&nbsp;******</div>
        <div>33. <strong>Classes and Self&nbsp;</strong></div>
        <div style="padding-left: 30px;">self -- temporary place holder for the object name&nbsp;</div>
        <div style="padding-left: 30px;">class className:&nbsp;</div>
        <div style="padding-left: 60px;">def createName(self, name):</div>
        <div style="padding-left: 90px;">self.name = name</div>
        <div style="padding-left: 60px;">def displayName(self):</div>
        <div style="padding-left: 90px;">return self.name</div>
        <div style="padding-left: 60px;">def saying(self):</div>
        <div style="padding-left: 90px;">print("hello %s" % self.name)</div>
        <div style="padding-left: 30px;">&nbsp;</div>
        <div style="padding-left: 30px;">first = className()</div>
        <div style="padding-left: 30px;">second = className()</div>
        <div style="padding-left: 30px;">first.createName('yofetahe')</div>
        <div style="padding-left: 30px;">second.createName('Hilina')</div>
        <div style="padding-left: 30px;">&nbsp;</div>
        <div style="padding-left: 30px;">first.displayName() // result 'yofetahe'</div>
        <div style="padding-left: 30px;">first.saying() // result 'hello yofetahe'</div>
        <div>&nbsp;******</div>
        <div>34. <strong>Subclasses Superclasses&nbsp;</strong></div>
        <div style="padding-left: 30px;">class parentClass:</div>
        <div style="padding-left: 30px;">var1 = "x"</div>
        <div style="padding-left: 30px;">var2 = "y"</div>
        <div style="padding-left: 30px;">&nbsp;</div>
        <div style="padding-left: 30px;">class childClass(parentClass): -- putting a class name as a parameter makes it parent class!!!</div>
        <div style="padding-left: 60px;">pass</div>
        <div style="padding-left: 30px;">&nbsp;</div>
        <div style="padding-left: 30px;">parentObject = parentClass()</div>
        <div style="padding-left: 30px;">parentObject.var1 // result 'x'</div>
        <div style="padding-left: 30px;">&nbsp;</div>
        <div style="padding-left: 30px;">childObject = childClass()</div>
        <div style="padding-left: 30px;">childObject.var1 // result 'x'</div>
        <div style="padding-left: 30px;">childObject.var2 // result 'y'</div>
        <div>&nbsp;******</div>
        <div>35. <strong>Overwrite Variables&nbsp;</strong></div>
        <div style="padding-left: 30px;">class parentClass:</div>
        <div style="padding-left: 60px;">var1 = "x"</div>
        <div style="padding-left: 60px;">var2 = "y"</div>
        <div style="padding-left: 30px;">&nbsp;</div>
        <div style="padding-left: 30px;">class childClass(parentClass):</div>
        <div style="padding-left: 60px;">var1 = "z"</div>
        <div style="padding-left: 30px;">&nbsp;</div>
        <div style="padding-left: 30px;">parentObject = parentClass()</div>
        <div style="padding-left: 30px;">parentObject.var1 // result 'x'</div>
        <div style="padding-left: 30px;">&nbsp;</div>
        <div style="padding-left: 30px;">childObject = childClass()</div>
        <div style="padding-left: 30px;">childObject.var1 // result 'z'</div>
        <div>&nbsp;******</div>
        <div>36. <strong>Multiple Parent Classes&nbsp;</strong></div>
        <div style="padding-left: 30px;">class Mom:</div>
        <div style="padding-left: 60px;">var1 = "im mom"</div>
        <div style="padding-left: 30px;">&nbsp;</div>
        <div style="padding-left: 30px;">class Dad:</div>
        <div style="padding-left: 60px;">var2 = "im dad"</div>
        <div style="padding-left: 30px;">&nbsp;</div>
        <div style="padding-left: 30px;">class child(Mom, Dad):</div>
        <div style="padding-left: 60px;">#pass -- it means do nothing</div>
        <div style="padding-left: 60px;">var3 = "im child"</div>
        <div style="padding-left: 30px;">&nbsp;</div>
        <div style="padding-left: 30px;">childObject = child()</div>
        <div style="padding-left: 30px;">childObject.var1 // result 'im mom'</div>
        <div style="padding-left: 30px;">childObject.var2 // result 'im dad'</div>
        <div>&nbsp;******</div>
        <div>37. <strong>Constructors&nbsp;</strong></div>
        <div style="padding-left: 30px;">class className:</div>
        <div style="padding-left: 60px;">def __init__(self):</div>
        <div style="padding-left: 90px;">print("this is a constructor")</div>
        <div style="padding-left: 90px;">print("this also print out")</div>
        <div style="padding-left: 30px;">&nbsp;</div>
        <div style="padding-left: 30px;">classObject = className()</div>
        <div style="padding-left: 30px;">// result</div>
        <div style="padding-left: 30px;">this is a constructor</div>
        <div style="padding-left: 30px;">this also print out</div>
        <div>&nbsp;******</div>
        <div>38. <strong>Import Modules&nbsp;</strong></div>
        <div style="padding-left: 30px;">#1. create a new python file - fileName = testModule.py</div>
        <div style="padding-left: 30px;">def testingModule:</div>
        <div style="padding-left: 30px;">print("this is a class")</div>
        <div style="padding-left: 30px;">&nbsp;</div>
        <div style="padding-left: 30px;">#2. import the file and access the function</div>
        <div style="padding-left: 30px;">import testModule</div>
        <div style="padding-left: 30px;">testModule.testingModule // result 'this is a class'</div>
        <div>&nbsp;******</div>
        <div>39. <strong>Reload Modules&nbsp;</strong></div>
        <div style="padding-left: 30px;">* Once the file is imported, then it is not possible to update the change on the file</div>
        <div style="padding-left: 30px;">* to get the update value after importing the file -- reload(fileName)</div>
        <div>&nbsp;******</div>
        <div>40. <strong>Getting Modules Info&nbsp;</strong></div>
        <div style="padding-left: 30px;">import math</div>
        <div style="padding-left: 30px;">&nbsp;</div>
        <div style="padding-left: 30px;">dir(math) -- list all the content like functionality, tells what the module contains</div>
        <div style="padding-left: 30px;">help(math) -- tells every detail of the module contains</div>
        <div style="padding-left: 30px;">math.__doc__ -- tell a quick documentation of the module</div>
        <div>&nbsp;******</div>
        <div>41. <strong>Working with files&nbsp;</strong></div>
        <div style="padding-left: 30px;">fob = open('c:/test/a.txt', 'w') -- file object is created. 'w' is to write</div>
        <div style="padding-left: 30px;">fob.write('hey now brown cow') -- write on the file</div>
        <div style="padding-left: 30px;">fob.close() -- close the file</div>
        <div style="padding-left: 30px;">&nbsp;</div>
        <div style="padding-left: 30px;">fob = open('c:/test/a.txt', 'r')</div>
        <div style="padding-left: 30px;">fob.read(3) // read the first three characters and result 'hey'</div>
        <div style="padding-left: 30px;">fob.read() // read the entire file content</div>
        <div>&nbsp;******</div>
        <div>42. <strong>Reading and Writing line by line&nbsp;</strong></div>
        <div style="padding-left: 30px;">fob = open('c:/test/a.txt', 'r')</div>
        <div style="padding-left: 30px;">print(fob.readline()) // result 'hey now brown cow'</div>
        <div style="padding-left: 30px;">print(fob.readlines()) // result ['whats ur name\n', 'my name is yof\n']</div>
        <div style="padding-left: 30px;">fob.close()</div>
        <div style="padding-left: 30px;">&nbsp;</div>
        <div style="padding-left: 30px;">fob = open('c:/test/a.txt', 'w')</div>
        <div style="padding-left: 30px;">fob.write("this is a new line\nthis is second line\nthis is third line")</div>
        <div style="padding-left: 30px;">fob.close()</div>
        <div>&nbsp;******</div>
        <div>43. <strong>Writing lines (modifying lines)&nbsp;</strong></div>
        <div style="padding-left: 30px;">fob = open('c:/test/a.txt', 'r')</div>
        <div style="padding-left: 30px;">listme = fob.readlines() // listme has all the line of the file</div>
        <div style="padding-left: 30px;">fob.close()</div>
        <div style="padding-left: 30px;">&nbsp;</div>
        <div style="padding-left: 30px;">listme[2] = "new content for the third line\n" // update the content in the listme array</div>
        <div style="padding-left: 30px;">&nbsp;</div>
        <div style="padding-left: 30px;">fob = open('c:/test/a.txt', 'w')</div>
        <div style="padding-left: 30px;">fob.writelines(listme)</div>
        <div style="padding-left: 30px;">fob.close()</div>
        <div>******</div>`, 
        images: [],
        create_date: "June 16, 2020" 
    },
    { 
        id: "1", 
        icon: "STS",
        category: "Spring",
        searchKey: ["spring", "framework", "spring framework"], 
        title: "Spring Framework",
        time: "20 min",
        introduction: `Spring is the most popular application development framework for Java technology. 
        And it is an open source and lightweight Java platform. Large number of developers around the world
        use Spring Framework to create high performing, easily testable, and reusable code.
        Spring makes Java productive, reactive, cloud ready, simple, and modern.`, 
        full_content: `<h3>Spring Framework - Overview</h3>
        <p>Spring is the most popular application development framework for Java technology.
        And it is an open source and lightweight Java platform. Large number of developers around the world
        use Spring Framework to create high performing, easily testable, and reusable code.
        Spring makes Java productive, reactive, cloud ready, simple, and modern.</p>
        Spring can do Microservices (quickly deliver production-grade features with independently evolvable microservices.), Reactive (Spring's asynchronous nonblocking architecture. It means get more from computing resources.), Cloud (Connect and scale services for whatever platform), Web apps (Frameworks for fast, secure, and responsive web applications connected to any data store.), Serverless (the ultimate flexibility. Scale up on demand and scale to zero with there's no demand), Event Driven (Integrate with enterprise. React to business events. Act on streaming data in realtime.), and Batch (automated tasks. Offline processing of data at a time.).
        <h3>Spring Framework - Architecture</h3>
        <p>Level 1. Core Container --> Beans, Core, Context, Expression Language </p>
        <p>Level 2. Data Access Integration --> JDBC, ORM, OXM, JMS, Transactions </p>
        <p>Level 3. Web --> Servlet, Porlet, Struts </p>
        <p>Level 3. Miscellaneous --> AOP, Aspects, Instrumentation</p>
        <h3>Spring Framework - IoC Container</h3>
        <p>The container creates the object(Beans), wire them together, configure them, and manage their lifecycle from creation till destruction.</div>
        <ul><li><b>Spring BeanFactory Container</b>:<br/> provide basic support for DI and defined by org.springframework.beans.factory.BeanFactory interface.<br/>
        <div class="didrde-code"><pre>XmlBeanFactory factory = new XmlBeanFactory (new ClassPathResource("Beans.xml")); <br/>
        HelloWorld obj = (HelloWorld) factory.getBean("helloWorld"); <br/>
        obj.getMessage();</pre></div></li>
        <li><b>Spring ApplicationContext Container</b>:<br/> spring's more advanced container and defined by org.springframework.context.ApplicationContext interface<br/>
        <div class="didrde-code"><pre>ApplicationContext context = new FileSystemXmlApplicationContext ("C:/path/to/bean/xml/file/Beans.xml");  <br/>
        HelloWorld obj = (HelloWorld) context.getBean("helloWorld"); <br/>
        obj.getMessage();</pre></div></li></ul>`,
        images: [],
        create_date: "June 14, 2020" 
    }
];