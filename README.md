# Raact-pro
HOW TO INSTALL REACT 


[Optional] Local Development Setup
In the videos of this React module, I will be coding in CodeSandbox. Many students skip straight to React without going through the course and CodeSandbox is the easiest way to learn React with no complicated setup.

HOWEVER, if you really want to develop locally using VSCode then you can follow the steps below to work on the module locally. You will need to adapt to some differences between your code and what you see in the videos. But each lesson has downloadable .zip files for you to follow along.



Step 1. Make sure you have the latest version of Node installed. If not head over to https://nodejs.org/en/download to download the LTS (Long Term Support) version of Node.



Step 2. Make sure you have the latest version of VSCode installed. If not, head over to https://code.visualstudio.com/download to download the version for your platform.



Step 3. Open a Terminal or command prompt and navigate to the directory where you want to create your React project. (We covered how to do this in previous parts of the course, if this is confusing, I recommend skipping this lesson and continuing with the videos and using CodeSandbox).



Step 4. Create a Vite app by running the following command in your Terminal or Command Prompt:

npm create vite@latest my-react-app --template react



Step 5. The first time, you won't have Vite installed. Type y to proceed. Then you'll be asked to select a framework. Use your down arrow to select React.



Step 6. You'll be asked to select a variant, select Javascript.




Then wait for the installation to finish, this will take a few minutes.






Step 7. Change directory to the new app that you built.

cd my-react-app





Step 8. Install dependencies:

npm install


When npm has installed all the necessary packages, open your project folder in VS Code. You should see a node modules folder:




Step 9. Start the development server:

npm run dev








 //


 Note about the Next Lesson - Packages and Imports
Quick note about the next lesson: React Dependencies & Styling the Keeper App



In the next lecture, we’ll be using components from the Material UI (MUI) packages. The components being used in the lesson now need to be accessed via a different package name.



You should include the following latest packages in the package.json:

"@mui/icons-material": "^5.15.11",
"@mui/material": "^5.15.11",
"@emotion/react": "^11.11.4",
"@emotion/styled": "^11.11.0",


And in the .jsx files should import the icons and the components like so:



CreateArea.jsx

import AddIcon from "@mui/icons-material/Add";
import { Fab } from "@mui/material";
import { Zoom } from "@mui/material";


Header.jsx

import HighlightIcon from "@mui/icons-material/Highlight";


Note.jsx

import DeleteIcon from "@mui/icons-material/Delete";


This way you'll avoid any warnings and errors. This is also the code you'll see used in the downloadable completed projects.





Previous version of the code:

This is the code you'll see in the video in the package.json. Use the new code above:

"@material-ui/core": "4.6.1",
"@material-ui/icons":"4.5.1",
and in the .jsx files, you'll see these imports, but use the code from above instead:



CreateArea.jsx

import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";


Header.jsx

import HighlightIcon from "@material-ui/icons/Highlight";


Note.jsx

import DeleteIcon from"@material-ui/icons/Delete"; 

Vite will compile your code every time your change anything and you can see the location of your development server in the output.





Step 10. Open the app in your browser by heading over to the local address shown. It's usually at http://localhost:5173/




You can now work on this local version and Vite will automatically recompile your code as you make changes.




Again, I recommend following the videos and using CodeSandbox, but if you are more advanced and prefer to develop locally then you should now be ready to adapt the video code to your local version.

TO CONFIRM THE INSTSLLTION
npm list @mui/material @emotion/react @emotion/styled react react-dom
npm list @material-ui/core react react-dom




Company Profile--------------------------------------------------------

        <Input type="text" placeholder="Phone Number" />
        <Input type="text" placeholder="Phone Number" />
        <Input type="text" placeholder="Ya" />

        <Input type="text" placeholder="Product type" />
        <Input type="text" placeholder="Business Registration Number" />

Business Registration Number: This is a unique identifier provided by the Corporate Affairs Commission (CAC) in Nigeria. It helps verify that the business is legally registered.

Company Name and Address: Ensure that the company name matches the registered name and that the address provided is valid.

Contact Information: Obtain phone numbers, email addresses, and other relevant contact details for the business.

Business Description: Have the company provide a brief overview of their business activities to ensure alignment with your platform's purpose.

Website and Social Media Links: If available, gather links to the company's website and social media profiles for further verification.

Tax Identification Number (TIN): Collect the TIN of the company to verify its tax compliance status.

Director/Owner Details: Obtain information about the directors or owners of the business, including their names and contact details.

Proof of Identity and Address: Request copies of identification documents for the directors or owners to verify their identities.

For Potential Customers:

Contact Information: Collect the customer's name, email address, and phone number to facilitate communication.

Location Preferences: If relevant, ask customers to provide their location preferences to match them with nearby businesses.

Service/Product Preferences: Understand what products or services the customer is interested in to tailor recommendations accordingly.

Reviews and Feedback: Allow customers to leave reviews and feedback on the businesses they engage with to help build trust within the community.

Transaction History: If applicable, keep a record of the customer's transaction history to personalize their experience and offer relevant recommendations.

Privacy and Security Measures: Assure customers of the privacy and security measures in place to protect their data and transactions.