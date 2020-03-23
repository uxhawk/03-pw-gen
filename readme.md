<h1>Password Generator</h1>
<p>Open <a href="https://uxhawk.github.io/gw-hmwk-03-pw-gen/">Password Generator</a></p>
<img src="https://lh3.googleusercontent.com/m78AzEhjMCendpsxT4-eweHPSVIj7UcOV8gJGIyTBsAx9EEMdUg7h6y6JiBP-rmHMalxK9P71CpcqJnZIbwgNLhEUoQe6UB804lXYwzzdRfo0Eahyhholwt7fXuzXogN0i5fDtX77WAq-biITZP_c8G0Qpmb3SCGDFAhCBnOSmwoRr9OXBXZMHgWBTCs0mhKCc7LmmLulcMHYtL82l8GlQb2kKuza_c3ucUKIeWqwVPyqRzkD7WZ5mP2LeYBlImtzJnmtDe5iyAQXADkQCoXIuZiO5t-8p6bX6y4cxb5lM9HP4dQ5mLATkr5jYPe6Ryh2K8xuxi_U0I0gAfw9tCRfsBBSf9XBvIwy9FtvuME38MSAQkHiEV0r2pyoik4d21CPwC_062XUwEvlp26_zfibcHJo2vULinJ1767pC8zk1rPcXl5NiBbPfMo0GdIkuVj4pbZeT_0SLG2_z4cdDxEhHDLVzHt4NMxakncazcjZLb5vTKlW57ArFOvO_5oFPTDBxmZdvXORYiEnAK801WzOjYor4x9GVvBdIjf3qyXnTUO_d8HOcYqP5vKHWcQoN_YPpqRUnpGoPn7CQVBXy2FdwRi5yuzyUVWuu7shfRlz4fHAnkPCthaRzY-FLLt_tTtddJAStEhjtoPTiXiAtIX7xP4M6u02-tA_ZGCpuw15p9vZaPEiXmH5bmk1V6tSNBhNDMqpha6DLcVi6j0r13iG7F4B_sjEthC3xriLErwHZTxD4YU03IF47c=w880-h494-no"
    alt="Screenshot of the password generator">

<h2>How to Use</h2>
<p>You can generate a password by responding to a series of prompts. In the prompts, click OK to include a character
    type (e.g., uppercase letters), or click cancel to exclude those from the password.</p>

<h2>The Code</h2>
<p>Character types are set to a boolean following the browser prompt. Any character type set to <code>true</code> will
    be added to a string variable called <code>availableChars</code>. For example:</p>
<ul>
    <li>
        <code>if (uppercase === true), availableChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"</code>
    </li>
    <li><code>if (specialCharacters === true && upperCase === true), availableChars =
            "ABCDEFGHIJKLMNOPQRSTUVWXYZ~!@#$%^&*()-_=+{}\|;:',<.>/?"</code></li>
</ul>

<p>From the string of <code>availableChars</code> e.g., "ABCDEFGHIJKLMNOPQRSTUVWXYZ~!@#$%^&*()-_=+{}\|;:',<.>/?", the
        password generator randomly select characters from <code>availableChars</code> and adds them to the password. It
        is possible that the program will by chance only select uppercase letters, even though the user opted to
        include special characters.</p> 
        <p> To resolve this problem, any character type set to <code>true</code> will create a
        <code>guranteed</code> variable. These guaranteed variables, set to random values of a given character type,
        will be added
        to the password string after the program randomly selects options from <code>availableChars</code>. </p>
