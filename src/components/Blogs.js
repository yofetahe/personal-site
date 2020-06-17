import React, { Fragment, useState } from 'react';

import Blog from './Blog';

import PageTitle from './PageTitle';
import RedirectPage from './RedirectPage';

import './blogs.css';

const Blogs = () => {

    const [blogs, setBlogs] = useState([
        { 
            id: "5", 
            icon: "image",
            category: "typescript",
            time: "45 min", 
            title: "TypeScript", 
            introduction: `TypeScript is a strongly-typed superset of JavaScript, which means it adds some syntactical benefits 
            to the language while still letting you write normal JavaScript if you want to. It encourages a more declarative 
            style of programming through things like interfaces and static typing (more on these later), offers modules and classes, 
            and most importantly, integrates relatively well with popular JavaScript libraries and code. You could think of it as 
            a strongly static layer over current JavaScript that has a few features to make life (and debugging especially) a bit 
            more bearable.`, 
            full_content: "Full content coming soon ...",
            images: [],
            create_date: "June 17, 2020" 
        },
        { 
            id: "4", 
            icon: "image",
            category: "nodejs",
            time: "30 min", 
            title: "Node.js", 
            introduction: `Node.js is an open source and cross-platform runtime environment for executing 
            JavaScript code outside of a browser. You need to remember that NodeJS is not a framework and it’s not a programming language. 
            Most of the people are confused and understand it’s a framework or a programming language.`, 
            full_content: "Full content coming soon ...",
            images: [],
            create_date: "June 17, 2020" 
        },
        { 
            id: "3", 
            icon: "image",
            category: "java",
            title: "Java Core",
            time: "50 min", 
            introduction: `Java is among the most popular programming languages out there, mainly because of how versatile and compatible it is. Java can be used for different purpose such as developing Mobile applications (specially Android apps),
            Desktop applications, Web applications, Web servers and application servers, Games, Database connection, and many more.
            As of 2019, 88% market share of all smartphones run on Android, the mobile operating system written in Java. Knowing Java opens a great deal of doors for you as a developer. 
            Java works on different platforms (Windows, Mac, Linux, Raspberry Pi, etc.)
            It is one of the most popular programming language in the world, easy to learn and simple to use, open-source and free, secure, fast and powerful, and has a huge community support`, 
            full_content: "Full content coming soon ...",
            images: [],
            create_date: "June 16, 2020" 
        },
        { 
            id: "2", 
            icon: "image",
            category: "python",
            time: "45 min", 
            title: "Python with Examples", 
            introduction: "Python has syntax that allows developers to write programs with fewer lines than some other programming languages and it has a simple syntax similar to the English language. Python runs on an interpreter system, meaning that code can be executed as soon as it is written. This content showed you introduction to the basic syntax with example.", 
            full_content: `<p>1. <strong>Number</strong> -- Addition, Subtraction, Multiplication, Division, Module(remainder), Exponent(**)</p>
            <p>2. <strong>Variable</strong> -- x = 10, g = input("Enter Number: ")//to request a user to enter the number</p>
            <p style="text-align: left; padding-left: 30px;">F = 0</p>
            <p style="text-align: left; padding-left: 30px;">X = 1</p>
            <p style="text-align: left; padding-left: 30px;">Def someFunction():</p>
            <p style="text-align: left; padding-left: 60px;">F = "abc"</p>
            <p style="text-align: left; padding-left: 60px;">Print(F)</p>
            <p style="text-align: left; padding-left: 30px;">&nbsp;</p>
            <p style="text-align: left; padding-left: 30px;">Global x</p>
            <p style="text-align: left; padding-left: 30px;">X = 4</p>
            <p style="text-align: left; padding-left: 30px;">Print(x)</p>
            <p style="text-align: left; padding-left: 30px;">&nbsp;</p>
            <p style="text-align: left; padding-left: 30px;">someFunction() -- print - "abc" (f's value) &amp; 4 (x's value)</p>
            <p style="text-align: left; padding-left: 30px;">Print(F) -- print - 0</p>
            <p style="text-align: left; padding-left: 30px;">Print(x) -- print - 4 -- it is because X variable declared as a global in the function.</p>
            <p style="text-align: left; padding-left: 30px;">&nbsp;</p>
            <p style="text-align: left; padding-left: 30px;">Def F -- delete the definition of the F variable</p>
            <p style="text-align: left; padding-left: 30px;">Print(F) -- throughs the ERROR because F is deleted.</p>
            <p style="text-align: left; padding-left: 30px;">&nbsp;</p>
            <p style="padding-left: 30px;">******</p>
            <p style="text-align: left; padding-left: 30px;">Def calculate():</p>
            <p style="text-align: left; padding-left: 60px;">Result = 4 + 5</p>
            <p style="text-align: left; padding-left: 60px;">Print(result)</p>
            <p style="text-align: left; padding-left: 30px;">&nbsp;</p>
            <p style="text-align: left; padding-left: 30px;">Def cube():</p>
            <p style="text-align: left; padding-left: 60px;">Result = 3 * 3 * 3</p>
            <p style="text-align: left; padding-left: 60px;">Return(result)</p>
            <p style="text-align: left; padding-left: 30px;">&nbsp;</p>
            <p style="text-align: left; padding-left: 30px;">Def product(y, x=1):</p>
            <p style="text-align: left; padding-left: 60px;">Result = y * x</p>
            <p style="text-align: left; padding-left: 60px;">print(result)</p>
            <p style="text-align: left; padding-left: 30px;">&nbsp;</p>
            <p style="text-align: left; padding-left: 30px;">Def multiAdd(*args):</p>
            <p style="text-align: left; padding-left: 60px;">Result = 1</p>
            <p style="text-align: left; padding-left: 60px;">For x in args:</p>
            <p style="text-align: left; padding-left: 90px;">Result = result + x</p>
            <p style="text-align: left; padding-left: 60px;">Return result</p>
            <p style="text-align: left; padding-left: 30px;">&nbsp;</p>
            <p style="text-align: left; padding-left: 30px;">Calculate() -- print - 10</p>
            <p style="text-align: left; padding-left: 30px;">Print(calculate()) -- print 10 &amp; None -- None is because the function (calcuator()) don&rsquo;t have return value</p>
            <p style="text-align: left; padding-left: 30px;">&nbsp;</p>
            <p style="text-align: left; padding-left: 30px;">Cube() -- print 27</p>
            <p style="text-align: left; padding-left: 30px;">Print(cube()) -- print 27 -- because the cube function has a return value</p>
            <p style="text-align: left; padding-left: 30px;">&nbsp;</p>
            <p style="text-align: left; padding-left: 30px;">Product(2) -- print 2 because x has a default value 1</p>
            <p style="text-align: left; padding-left: 30px;">Product(2, 3) -- print 6 because x's value changed to 3</p>
            <p style="text-align: left; padding-left: 30px;">Product(x = 3, y = 2) -- print 6 -- python don't need a particular order of the arguments. It assign value based on the arguments name</p>
            <p style="text-align: left; padding-left: 30px;">&nbsp;</p>
            <p style="text-align: left; padding-left: 30px;">Print(multiAdd(4, 5, 2, 10))</p>
            <p>******</p>
            <p>3. <strong>Modules&nbsp;</strong></p>
            <p style="padding-left: 30px;">import math</p>
            <p style="padding-left: 30px;">math.floor(18.5) // math is a module name and floor is a function</p>
            <p style="padding-left: 30px;">math.sqrt(81)</p>
            <p style="padding-left: 30px;">&nbsp;</p>
            <p style="padding-left: 30px;">x = math.sqrt()</p>
            <p style="padding-left: 30px;">x(81)</p>
            <p style="padding-left: 30px;">&nbsp;</p>
            <p style="padding-left: 30px;">&nbsp;&nbsp; Functions</p>
            <p style="padding-left: 30px;">pow(5,4)//power of function,</p>
            <p style="padding-left: 30px;">abs(-12)//absolute value function</p>
            <p>******</p>
            <p>4.<strong> Save Python Programs</strong> - document_name.py</p>
            <p>&nbsp;</p>
            <p>5. <strong>Strings</strong> - "hi student" or 'hi student' or "he\'s a student" or "student said, \"hi\" to me"</p>
            <p>&nbsp;</p>
            <p>6. <strong>Strings</strong>&nbsp;</p>
            <p style="padding-left: 30px;">//concatinating number with strings</p>
            <p style="padding-left: 30px;">num = 18</p>
            <p style="padding-left: 30px;">print("Your age is " + str(num))</p>
            <p style="padding-left: 30px;">OR</p>
            <p style="padding-left: 30px;">print("your age is " + '18')</p>
            <p style="padding-left: 30px;">OR</p>
            <p style="padding-left: 30px;">print("your age is " + repr(num))</p>
            <p>******</p>
            <p>7. <strong>Input</strong></p>
            <p style="padding-left: 30px;">x = input("Enter your name: ")</p>
            <p style="padding-left: 30px;">print(x)</p>
            <p>******</p>
            <p>8. <strong>Sequences and Lists</strong>&nbsp;</p>
            <p style="padding-left: 30px;">family = ['mom', 'dad', 'bro', 'sis']</p>
            <p style="padding-left: 30px;">family[1] // result 'dad'</p>
            <p style="padding-left: 30px;">family[-1] // result 'sis'</p>
            <p style="padding-left: 30px;">&nbsp;</p>
            <p style="padding-left: 30px;">'yofetahe'[0] // result y</p>
            <p>******</p>
            <p>9. <strong>Slicing</strong>&nbsp;</p>
            <p style="padding-left: 30px;">number = [1, 2, 3, 4, 5, 6, 7, 8, 9]</p>
            <p style="padding-left: 30px;">number[4:8] // result [4, 5, 6, 7]</p>
            <p style="padding-left: 30px;">number[-5:] // result [5, 6, 7, 8, 9]</p>
            <p style="padding-left: 30px;">number[:] // result [1, 2, 3, 4, 5, 6, 7, 8, 9]</p>
            <p style="padding-left: 30px;">number[4:] // result [4, 5, 6, 7, 8, 9]</p>
            <p style="padding-left: 30px;">number[4:8:2] // result [4, 6]</p>
            <p style="padding-left: 30px;">number[10:0:-2] // result [9, 7, 5, 3, 1]</p>
            <p style="padding-left: 30px;">number[::-2] // result [9, 7, 5, 3, 1]</p>
            <p>******</p>
            <p>10. <strong>Editing Sequencing</strong>&nbsp;</p>
            <p style="padding-left: 30px;">[7, 4, 5] + [4, 6, 5] // [7, 4, 5, 4, 6, 5]</p>
            <p style="padding-left: 30px;">'yofetahe ' + 'sereke' // 'yofetahe sereke'</p>
            <p style="padding-left: 30px;">&nbsp;</p>
            <p style="padding-left: 30px;">'x'*5 // result 'xxxxx'</p>
            <p style="padding-left: 30px;">[10]*5 // [10, 10, 10, 10, 10]</p>
            <p style="padding-left: 30px;">&nbsp;</p>
            <p style="padding-left: 30px;">name = 'roasebeef'</p>
            <p style="padding-left: 30px;">'z' in name // result false</p>
            <p style="padding-left: 30px;">'r' in name // result true</p>
            <p style="padding-left: 30px;">&nbsp;</p>
            <p style="padding-left: 30px;">family = ['mom', 'dad', 'bro', 'sis']</p>
            <p style="padding-left: 30px;">'sis' in family // result true</p>
            <p>&nbsp;******</p>
            <p>11. <strong>More List functions</strong>&nbsp;</p>
            <p style="padding-left: 30px;">number = [10, 21, 3, 9, 12, 20]</p>
            <p style="padding-left: 30px;">len(number) // result 6 --. return length of the sequence</p>
            <p style="padding-left: 30px;">max(number) // result 21</p>
            <p style="padding-left: 30px;">min(number) // result 3</p>
            <p style="padding-left: 30px;">list('yofetahe') // result ['y', 'o', 'f', 'e', 't', 'a', 'h', 'e']</p>
            <p style="padding-left: 30px;">&nbsp;</p>
            <p style="padding-left: 30px;">number[0] = 77 // change value of index 0</p>
            <p style="padding-left: 30px;">del number[0] // delete value of index 0 from z list</p>
            <p>&nbsp;******</p>
            <p>12. <strong>Slicing Lists</strong>&nbsp;</p>
            <p style="padding-left: 30px;">example = list('yofetahe') // example will be ['y', 'o', 'f', 'e', 't', 'a', 'h', 'e']</p>
            <p style="padding-left: 30px;">example[4:] = list('baby') // result ['y', 'o', 'f', 'e', 'b', 'a', 'b', 'y']</p>
            <p style="padding-left: 30px;">&nbsp;</p>
            <p style="padding-left: 30px;">example = [7,8,9]</p>
            <p style="padding-left: 30px;">example[1:1] = [3,3,3] // result [7, 3, 3, 3, 8, 9] --&gt; add elements in the list</p>
            <p style="padding-left: 30px;">example[1:5] = [] // result [7, 9] --&gt; delete element from the list</p>
            <p>&nbsp;******</p>
            <p>13. <strong>Methods&nbsp;</strong></p>
            <p style="padding-left: 30px;">example = [7,8,9]</p>
            <p style="padding-left: 30px;">example.append(10) // result [7,8,9,10]</p>
            <p style="padding-left: 30px;">&nbsp;</p>
            <p style="padding-left: 30px;">example = ['y', 'o', 'f', 'e', 't', 'a', 'h', 'e']</p>
            <p style="padding-left: 30px;">example.count('z') // result 0</p>
            <p style="padding-left: 30px;">example.count('a') // result 5</p>
            <p style="padding-left: 30px;">&nbsp;</p>
            <p style="padding-left: 30px;">one = [1,2,3]</p>
            <p style="padding-left: 30px;">two = [4,5,6]</p>
            <p style="padding-left: 30px;">one.extend(two) // result [1,2,3,4,5,6]</p>
            <p>&nbsp;******</p>
            <p>14. <strong>More Methods</strong>&nbsp;</p>
            <p style="padding-left: 30px;">say = ['y', 'o', 'f', 'e', 't', 'a', 'h', 'e']</p>
            <p style="padding-left: 30px;">say.index('f') // result 2</p>
            <p style="padding-left: 30px;">say.insert(2, 'g') // result ['y', 'o', 'f', 'g', 'e', 't', 'a', 'h', 'e']</p>
            <p style="padding-left: 30px;">say.pop(3) // result ['y', 'o', 'f', 'e', 't', 'a', 'h', 'e']</p>
            <p style="padding-left: 30px;">say.remove('o') // result ['y', 'f', 'e', 't', 'a', 'h', 'e']</p>
            <p style="padding-left: 30px;">say.reverse() // result ['e', 'h', 'a', 't', 'e', 'f', 'y']</p>
            <p>&nbsp;******</p>
            <p>15. <strong>Sort and Tuples</strong>&nbsp;</p>
            <p style="padding-left: 30px;">new = [32, 40, 76, 23, 54]</p>
            <p style="padding-left: 30px;">new.sort() // sort the list content&nbsp;</p>
            <p style="padding-left: 30px;">sorted('Easyhoss') // result ['E', 'a', 'h', 'o', 's', 's', 's', 'y']&nbsp;</p>
            <p style="padding-left: 30px;">Tuple - is more like a list</p>
            <p>&nbsp;******</p>
            <p>16. <strong>Strings and Stuff</strong>&nbsp;</p>
            <p style="padding-left: 30px;">yamget = "hey there %s, hows your %s"</p>
            <p style="padding-left: 30px;">var = ('betty', 'foot')</p>
            <p style="padding-left: 30px;">print(yamget % var) ---&gt; 'hey there betty, hows your foot'</p>
            <p style="padding-left: 30px;">&nbsp;</p>
            <p style="padding-left: 30px;">exmaple = "hey now bessie nice chops"</p>
            <p style="padding-left: 30px;">example.find('bessie') // result 8 ---&gt; which means bessie start on 8th character</p>
            <p>&nbsp;******</p>
            <p>17. <strong>String methods</strong>&nbsp;</p>
            <p style="padding-left: 30px;">sequence = ['hey', 'there', 'bessie', 'hoss']</p>
            <p style="padding-left: 30px;">glue = ' hoss '</p>
            <p style="padding-left: 30px;">glue.join(sequence) // result 'hey hoss there hoss bessie hoss hoss'</p>
            <p style="padding-left: 30px;">&nbsp;</p>
            <p style="padding-left: 30px;">statment = "I wish i Had NO sausage"</p>
            <p style="padding-left: 30px;">statment.lower() // result 'i wish i had no sausage'</p>
            <p style="padding-left: 30px;">&nbsp;</p>
            <p style="padding-left: 30px;">statment.replace('sausage', 'pain') // result 'i wish i had no pain'</p>
            <p>&nbsp;******</p>
            <p>18. <strong>Dictionary</strong>&nbsp;</p>
            <p style="padding-left: 30px;">book={'Dad':'Bob', 'Mom':'Lisa', 'Bro':'Joe'}</p>
            <p style="padding-left: 30px;">book['Dad'] // result 'Bob'</p>
            <p style="padding-left: 30px;">&nbsp;</p>
            <p style="padding-left: 30px;">book.clear() // result {} --&gt; clear all values of the dictionary</p>
            <p style="padding-left: 30px;">&nbsp;</p>
            <p style="padding-left: 30px;">age = {'Dad':'54', 'Mom':'45'}</p>
            <p style="padding-left: 30px;">tuna = age.copy() // copy all the value of age to tuna</p>
            <p style="padding-left: 30px;">&nbsp;</p>
            <p style="padding-left: 30px;">age.has_key('Mom') // result True --&gt; but doesn't work on PYTHON 3</p>
            <p>&nbsp;******</p>
            <p>19. <strong>if statment</strong>&nbsp;</p>
            <p style="padding-left: 30px;">tuna="fish"</p>
            <p style="padding-left: 30px;">if tuna == "fish":</p>
            <p style="padding-left: 30px;">print("this is a fish")</p>
            <p>******</p>
            <p>21. <strong>else and elif</strong>&nbsp;</p>
            <p style="padding-left: 30px;">tuna="fish"</p>
            <p style="padding-left: 30px;">if tuna == "bee":</p>
            <p>&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;print("this is a bee")</p>
            <p style="padding-left: 30px;">elif tuna == "fish":</p>
            <p>&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;print("this is a fish")</p>
            <p style="padding-left: 30px;">else:</p>
            <p>&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;print("this is not a fish")</p>
            <p>&nbsp;******</p>
            <p>22. <strong>Nesting Statments</strong>&nbsp;</p>
            <p style="padding-left: 30px;">thing = "animal"</p>
            <p style="padding-left: 30px;">animal = "cat"</p>
            <p style="padding-left: 30px;">if thing == "animal":</p>
            <p style="padding-left: 60px;">if animal == "cat":</p>
            <p style="padding-left: 90px;">print("this is a cat")</p>
            <p style="padding-left: 60px;">else:</p>
            <p style="padding-left: 90px;">print("this is not a cat")</p>
            <p style="padding-left: 30px;">else:</p>
            <p style="padding-left: 60px;">print("i don't know what this thing is")</p>
            <p>&nbsp;******</p>
            <p>23.<strong> Comparison Operators</strong></p>
            <p style="padding-left: 30px;">&lt;, &gt;, &lt;=, &gt;=, !=</p>
            <p style="padding-left: 30px;">&nbsp;</p>
            <p style="padding-left: 30px;">one = [12, 13, 14]</p>
            <p style="padding-left: 30px;">two = [12, 13, 14]</p>
            <p style="padding-left: 30px;">one is two // result false b/c they are not the same object</p>
            <p style="padding-left: 30px;">&nbsp;</p>
            <p style="padding-left: 30px;">one = two = [12, 13, 14]</p>
            <p style="padding-left: 30px;">one is two // result true b/c they are declared in one line</p>
            <p>&nbsp;******</p>
            <p>24. <strong>And and Or</strong>&nbsp;</p>
            <p style="padding-left: 30px;">example = 5</p>
            <p style="padding-left: 30px;">if example &gt; 3 and example &lt; 6:</p>
            <p style="padding-left: 30px;">print("the number is between 3 and 6")</p>
            <p>&nbsp;******</p>
            <p>25. <strong>for and while loop</strong>&nbsp;</p>
            <p style="padding-left: 30px;">b = 4</p>
            <p style="padding-left: 30px;">while b &lt;= 9:</p>
            <p style="padding-left: 60px;">print b</p>
            <p style="padding-left: 60px;">b += 1</p>
            <p style="padding-left: 30px;">&nbsp;</p>
            <p style="padding-left: 30px;">gl = ['bread', 'milk', 'meat', 'beef']</p>
            <p style="padding-left: 30px;">for food in gl:</p>
            <p style="padding-left: 60px;">print(food)</p>
            <p>&nbsp;******</p>
            <p>26.<strong> Infinite Loops and Break&nbsp;</strong></p>
            <p style="padding-left: 30px;">ages = {'dad':42, 'mom':40, 'sis':30}</p>
            <p style="padding-left: 30px;">for item in ages:</p>
            <p style="padding-left: 60px;">print item, ages[item]</p>
            <p style="padding-left: 60px;">if item == 'dad':break</p>
            <p>&nbsp;******</p>
            <p>27. <strong>Building Functions</strong>&nbsp;</p>
            <p style="padding-left: 30px;">def whatsup(x):</p>
            <p style="padding-left: 60px;">return 'whats up ' + x</p>
            <p style="padding-left: 30px;">&nbsp;</p>
            <p style="padding-left: 30px;">print whatsup('jone') // result 'whats up jone'</p>
            <p>&nbsp;******</p>
            <p>28. <strong>Default Parameters&nbsp;</strong></p>
            <p style="padding-left: 30px;">#1</p>
            <p style="padding-left: 30px;">def name(first, last):</p>
            <p style="padding-left: 60px;">print('%s %s' % (first, last))</p>
            <p style="padding-left: 30px;">&nbsp;</p>
            <p style="padding-left: 30px;">name('yoftahe', 'sereke') // result 'yoftehe sereke'</p>
            <p style="padding-left: 30px;">name // result nothing</p>
            <p style="padding-left: 30px;">&nbsp;</p>
            <p style="padding-left: 30px;">#2</p>
            <p style="padding-left: 30px;">def name(first = 'yoftahe', last = 'sereke'):</p>
            <p style="padding-left: 60px;">print('%s %s' % (first, last))</p>
            <p style="padding-left: 30px;">name // result 'yoftahe sereke' ---&gt; print the default value given</p>
            <p style="padding-left: 30px;">name('Hilina', 'Sereke') //result 'Hilina Sereke'</p>
            <p>&nbsp;******</p>
            <p>29. <strong>Multiple Parameters&nbsp;</strong></p>
            <p style="padding-left: 30px;">#1</p>
            <p style="padding-left: 30px;">def list(*food):</p>
            <p style="padding-left: 60px;">print(food)</p>
            <p style="padding-left: 30px;">&nbsp;</p>
            <p style="padding-left: 30px;">list('apples') // result ('apples',)</p>
            <p style="padding-left: 30px;">list('apples', 'peaches', 'beef') // reuslt ('apples', 'peaches', 'beef')</p>
            <p style="padding-left: 30px;">&nbsp;</p>
            <p style="padding-left: 30px;">#2</p>
            <p style="padding-left: 30px;">def profile(name, *ages):</p>
            <p style="padding-left: 60px;">print(name)</p>
            <p style="padding-left: 60px;">print(ages)</p>
            <p style="padding-left: 30px;">profile('Hilina', 11, 12, 13) // result Hilina \n (11, 12, 13)</p>
            <p>&nbsp;******</p>
            <p>30. <strong>Parameter Types&nbsp;</strong></p>
            <p style="padding-left: 30px;">#1</p>
            <p style="padding-left: 30px;">def cart(**items):</p>
            <p style="padding-left: 60px;">print(items)</p>
            <p style="padding-left: 30px;">cart(apples=3, peaches=5, beef=2) // result {'peaches':5, 'apples':3, 'beef':2}</p>
            <p style="padding-left: 30px;">&nbsp;</p>
            <p style="padding-left: 30px;">#2</p>
            <p style="padding-left: 30px;">def profile(first, last, *ages, **items):</p>
            <p style="padding-left: 60px;">print(first, last)</p>
            <p style="padding-left: 60px;">print(ages)</p>
            <p style="padding-left: 60px;">print(items)</p>
            <p style="padding-left: 30px;">&nbsp;</p>
            <p style="padding-left: 30px;">profile('yofetahe', 'sereke', 12,12,11,14, apples=3, peaches=5, beef=2)</p>
            <p style="padding-left: 30px;">// result -</p>
            <p style="padding-left: 30px;">// yofetahe sereke</p>
            <p style="padding-left: 30px;">// (12,12,11,14)</p>
            <p style="padding-left: 30px;">// {'peaches':5, 'apples':3, 'beef':2}</p>
            <p>&nbsp;******</p>
            <p>31. <strong>Tuples as Parameters&nbsp;</strong></p>
            <p style="padding-left: 30px;">* means working with Tuples</p>
            <p style="padding-left: 30px;">** means working with Dictionary</p>
            <p style="padding-left: 30px;">&nbsp;</p>
            <p style="padding-left: 30px;">#1</p>
            <p style="padding-left: 30px;">def exmaple(a, b, c):</p>
            <p style="padding-left: 60px;">return a+b*c</p>
            <p style="padding-left: 30px;">&nbsp;</p>
            <p style="padding-left: 30px;">tuna = (1,2,3)</p>
            <p style="padding-left: 30px;">example(*tuna) // * is must to use tuple as a parameter</p>
            <p style="padding-left: 30px;">&nbsp;</p>
            <p style="padding-left: 30px;">#2</p>
            <p style="padding-left: 30px;">def example2(**this):</p>
            <p style="padding-left: 60px;">print(this)</p>
            <p style="padding-left: 30px;">&nbsp;</p>
            <p style="padding-left: 30px;">bacon={'mom':32, 'dad':45}</p>
            <p style="padding-left: 30px;">example2(**bacon) // ** is a must to use dictionary as a parameter</p>
            <p>&nbsp;******</p>
            <p>32. <strong>Object Oriented Program&nbsp;</strong></p>
            <p style="padding-left: 30px;">-- the method in the class and the function outside of the class is almost the same but the first parameter of the method in the class is 'self'</p>
            <p style="padding-left: 30px;">&nbsp;</p>
            <p style="padding-left: 30px;">#1. creating a class</p>
            <p style="padding-left: 30px;">class exampleClass:&nbsp;</p>
            <p style="padding-left: 60px;">eye="brown"</p>
            <p style="padding-left: 60px;">age=22</p>
            <p style="padding-left: 60px;">&nbsp;</p>
            <p style="padding-left: 60px;">def thisMethod(self): --- the first parameter must be 'self'</p>
            <p style="padding-left: 90px;">return 'Hey this is the first method'</p>
            <p style="padding-left: 30px;">&nbsp;</p>
            <p style="padding-left: 30px;">#2. creating an object of class</p>
            <p style="padding-left: 30px;">exampleObject = exampleClass()</p>
            <p style="padding-left: 30px;">exampleObject.eye // result brown</p>
            <p style="padding-left: 30px;">exampleObject.thisMethod() // result 'Hey this is the first method'</p>
            <p>&nbsp;******</p>
            <p>33. <strong>Classes and Self&nbsp;</strong></p>
            <p style="padding-left: 30px;">self -- temporary place holder for the object name&nbsp;</p>
            <p style="padding-left: 30px;">class className:&nbsp;</p>
            <p style="padding-left: 60px;">def createName(self, name):</p>
            <p style="padding-left: 90px;">self.name = name</p>
            <p style="padding-left: 60px;">def displayName(self):</p>
            <p style="padding-left: 90px;">return self.name</p>
            <p style="padding-left: 60px;">def saying(self):</p>
            <p style="padding-left: 90px;">print("hello %s" % self.name)</p>
            <p style="padding-left: 30px;">&nbsp;</p>
            <p style="padding-left: 30px;">first = className()</p>
            <p style="padding-left: 30px;">second = className()</p>
            <p style="padding-left: 30px;">first.createName('yofetahe')</p>
            <p style="padding-left: 30px;">second.createName('Hilina')</p>
            <p style="padding-left: 30px;">&nbsp;</p>
            <p style="padding-left: 30px;">first.displayName() // result 'yofetahe'</p>
            <p style="padding-left: 30px;">first.saying() // result 'hello yofetahe'</p>
            <p>&nbsp;******</p>
            <p>34. <strong>Subclasses Superclasses&nbsp;</strong></p>
            <p style="padding-left: 30px;">class parentClass:</p>
            <p style="padding-left: 30px;">var1 = "x"</p>
            <p style="padding-left: 30px;">var2 = "y"</p>
            <p style="padding-left: 30px;">&nbsp;</p>
            <p style="padding-left: 30px;">class childClass(parentClass): -- putting a class name as a parameter makes it parent class!!!</p>
            <p style="padding-left: 60px;">pass</p>
            <p style="padding-left: 30px;">&nbsp;</p>
            <p style="padding-left: 30px;">parentObject = parentClass()</p>
            <p style="padding-left: 30px;">parentObject.var1 // result 'x'</p>
            <p style="padding-left: 30px;">&nbsp;</p>
            <p style="padding-left: 30px;">childObject = childClass()</p>
            <p style="padding-left: 30px;">childObject.var1 // result 'x'</p>
            <p style="padding-left: 30px;">childObject.var2 // result 'y'</p>
            <p>&nbsp;******</p>
            <p>35. <strong>Overwrite Variables&nbsp;</strong></p>
            <p style="padding-left: 30px;">class parentClass:</p>
            <p style="padding-left: 60px;">var1 = "x"</p>
            <p style="padding-left: 60px;">var2 = "y"</p>
            <p style="padding-left: 30px;">&nbsp;</p>
            <p style="padding-left: 30px;">class childClass(parentClass):</p>
            <p style="padding-left: 60px;">var1 = "z"</p>
            <p style="padding-left: 30px;">&nbsp;</p>
            <p style="padding-left: 30px;">parentObject = parentClass()</p>
            <p style="padding-left: 30px;">parentObject.var1 // result 'x'</p>
            <p style="padding-left: 30px;">&nbsp;</p>
            <p style="padding-left: 30px;">childObject = childClass()</p>
            <p style="padding-left: 30px;">childObject.var1 // result 'z'</p>
            <p>&nbsp;******</p>
            <p>36. <strong>Multiple Parent Classes&nbsp;</strong></p>
            <p style="padding-left: 30px;">class Mom:</p>
            <p style="padding-left: 60px;">var1 = "im mom"</p>
            <p style="padding-left: 30px;">&nbsp;</p>
            <p style="padding-left: 30px;">class Dad:</p>
            <p style="padding-left: 60px;">var2 = "im dad"</p>
            <p style="padding-left: 30px;">&nbsp;</p>
            <p style="padding-left: 30px;">class child(Mom, Dad):</p>
            <p style="padding-left: 60px;">#pass -- it means do nothing</p>
            <p style="padding-left: 60px;">var3 = "im child"</p>
            <p style="padding-left: 30px;">&nbsp;</p>
            <p style="padding-left: 30px;">childObject = child()</p>
            <p style="padding-left: 30px;">childObject.var1 // result 'im mom'</p>
            <p style="padding-left: 30px;">childObject.var2 // result 'im dad'</p>
            <p>&nbsp;******</p>
            <p>37. <strong>Constructors&nbsp;</strong></p>
            <p style="padding-left: 30px;">class className:</p>
            <p style="padding-left: 60px;">def __init__(self):</p>
            <p style="padding-left: 90px;">print("this is a constructor")</p>
            <p style="padding-left: 90px;">print("this also print out")</p>
            <p style="padding-left: 30px;">&nbsp;</p>
            <p style="padding-left: 30px;">classObject = className()</p>
            <p style="padding-left: 30px;">// result</p>
            <p style="padding-left: 30px;">this is a constructor</p>
            <p style="padding-left: 30px;">this also print out</p>
            <p>&nbsp;******</p>
            <p>38. <strong>Import Modules&nbsp;</strong></p>
            <p style="padding-left: 30px;">#1. create a new python file - fileName = testModule.py</p>
            <p style="padding-left: 30px;">def testingModule:</p>
            <p style="padding-left: 30px;">print("this is a class")</p>
            <p style="padding-left: 30px;">&nbsp;</p>
            <p style="padding-left: 30px;">#2. import the file and access the function</p>
            <p style="padding-left: 30px;">import testModule</p>
            <p style="padding-left: 30px;">testModule.testingModule // result 'this is a class'</p>
            <p>&nbsp;******</p>
            <p>39. <strong>Reload Modules&nbsp;</strong></p>
            <p style="padding-left: 30px;">* Once the file is imported, then it is not possible to update the change on the file</p>
            <p style="padding-left: 30px;">* to get the update value after importing the file -- reload(fileName)</p>
            <p>&nbsp;******</p>
            <p>40. <strong>Getting Modules Info&nbsp;</strong></p>
            <p style="padding-left: 30px;">import math</p>
            <p style="padding-left: 30px;">&nbsp;</p>
            <p style="padding-left: 30px;">dir(math) -- list all the content like functionality, tells what the module contains</p>
            <p style="padding-left: 30px;">help(math) -- tells every detail of the module contains</p>
            <p style="padding-left: 30px;">math.__doc__ -- tell a quick documentation of the module</p>
            <p>&nbsp;******</p>
            <p>41. <strong>Working with files&nbsp;</strong></p>
            <p style="padding-left: 30px;">fob = open('c:/test/a.txt', 'w') -- file object is created. 'w' is to write</p>
            <p style="padding-left: 30px;">fob.write('hey now brown cow') -- write on the file</p>
            <p style="padding-left: 30px;">fob.close() -- close the file</p>
            <p style="padding-left: 30px;">&nbsp;</p>
            <p style="padding-left: 30px;">fob = open('c:/test/a.txt', 'r')</p>
            <p style="padding-left: 30px;">fob.read(3) // read the first three characters and result 'hey'</p>
            <p style="padding-left: 30px;">fob.read() // read the entire file content</p>
            <p>&nbsp;******</p>
            <p>42. <strong>Reading and Writing line by line&nbsp;</strong></p>
            <p style="padding-left: 30px;">fob = open('c:/test/a.txt', 'r')</p>
            <p style="padding-left: 30px;">print(fob.readline()) // result 'hey now brown cow'</p>
            <p style="padding-left: 30px;">print(fob.readlines()) // result ['whats ur name\n', 'my name is yof\n']</p>
            <p style="padding-left: 30px;">fob.close()</p>
            <p style="padding-left: 30px;">&nbsp;</p>
            <p style="padding-left: 30px;">fob = open('c:/test/a.txt', 'w')</p>
            <p style="padding-left: 30px;">fob.write("this is a new line\nthis is second line\nthis is third line")</p>
            <p style="padding-left: 30px;">fob.close()</p>
            <p>&nbsp;******</p>
            <p>43. <strong>Writing lines (modifying lines)&nbsp;</strong></p>
            <p style="padding-left: 30px;">fob = open('c:/test/a.txt', 'r')</p>
            <p style="padding-left: 30px;">listme = fob.readlines() // listme has all the line of the file</p>
            <p style="padding-left: 30px;">fob.close()</p>
            <p style="padding-left: 30px;">&nbsp;</p>
            <p style="padding-left: 30px;">listme[2] = "new content for the third line\n" // update the content in the listme array</p>
            <p style="padding-left: 30px;">&nbsp;</p>
            <p style="padding-left: 30px;">fob = open('c:/test/a.txt', 'w')</p>
            <p style="padding-left: 30px;">fob.writelines(listme)</p>
            <p style="padding-left: 30px;">fob.close()</p>
            <p>******</p>`, 
            images: [],
            create_date: "June 16, 2020" 
        },
        { 
            id: "1", 
            icon: "image",
            category: "STS", 
            title: "Spring Framework",
            time: "20 min",
            introduction: "Spring is the most popular application development framework for Java technology." + 
            "And it is an open source and lightweight Java platform. Large number of developers around the world " + 
            "use Spring Framework to create high performing, easily testable, and reusable code. " + 
            "Spring makes Java productive, reactive, cloud ready, simple, and modern.", 
            full_content: "<h3>Spring Framework - Overview</h3>" + 
            "<p>Spring is the most popular application development framework for Java technology." + 
            "And it is an open source and lightweight Java platform. Large number of developers around the world " + 
            "use Spring Framework to create high performing, easily testable, and reusable code. " + 
            "Spring makes Java productive, reactive, cloud ready, simple, and modern.</p>" + 
            "Spring can do Microservices (quickly deliver production-grade features with independently evolvable microservices.), Reactive (Spring's asynchronous nonblocking architecture. It means get more from computing resources.), Cloud (Connect and scale services for whatever platform), Web apps (Frameworks for fast, secure, and responsive web applications connected to any data store.), Serverless (the ultimate flexibility. Scale up on demand and scale to zero with there's no demand), Event Driven (Integrate with enterprise. React to business events. Act on streaming data in realtime.), and Batch (automated tasks. Offline processing of data at a time.)." +
            "<h3>Spring Framework - Architecture</h3>" +
            "<p>Level 1. Core Container --> Beans, Core, Context, Expression Language </p>" +
            "<p>Level 2. Data Access Integration --> JDBC, ORM, OXM, JMS, Transactions </p>" +
            "<p>Level 3. Web --> Servlet, Porlet, Struts </p>" +
            "<p>Level 3. Miscellaneous --> AOP, Aspects, Instrumentation</p>" +
            "<h3>Spring Framework - IoC Container</h3>" +
            "<p>The container creates the object(Beans), wire them together, configure them, and manage their lifecycle from creation till destruction.</p>" +
            "<ul><li><b>Spring BeanFactory Container</b>:<br/> provide basic support for DI and defined by org.springframework.beans.factory.BeanFactory interface.<br/>" + 
            "<div class=\"didrde-code\"><pre>XmlBeanFactory factory = new XmlBeanFactory (new ClassPathResource(\"Beans.xml\")); <br/>" + 
			"HelloWorld obj = (HelloWorld) factory.getBean(\"helloWorld\"); <br/>" + 
			"obj.getMessage();</pre></div></li>" +
            "<li><b>Spring ApplicationContext Container</b>:<br/> spring's more advanced container and defined by org.springframework.context.ApplicationContext interface<br/>" +
            "<div class=\"didrde-code\"><pre>ApplicationContext context = new FileSystemXmlApplicationContext (\"C:/path/to/bean/xml/file/Beans.xml\");  <br/>" + 
			"HelloWorld obj = (HelloWorld) context.getBean(\"helloWorld\"); <br/>" + 
			"obj.getMessage();</pre></div></li></ul>",
            images: [],
            create_date: "June 14, 2020" 
        }
    ]);

    return (
        <Fragment>
            <RedirectPage />
            <div id="homePageContent" className="PageContent">
                <div className="BackgroundText">Blogs</div>
                <PageTitle pageTitle="WHICH TECHNOLOGY DID I STUDY? " />
                <div className="Blogs_List">
                    
                    {blogs.map(blog => {
                        return <Blog blog={blog} />;
                    })}
                    
                </div>
            </div>
        </Fragment>
    );
}

export default Blogs;