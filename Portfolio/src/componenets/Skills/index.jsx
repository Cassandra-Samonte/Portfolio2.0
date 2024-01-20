import reactLogo from '/public/logos/react.svg'
import viteLogo from '/public/logos/vite.svg'
import JavaScriptLogo from '/public/logos/JavaScript.png'
import pythonLogo from '/public/logos/python.png'
import nodeLogo from '/public/logos/node.png'
import expressLogo from '/public/logos/express.png'
import jQueryLogo from '/public/logos/jquery.png'
import postgresqlLogo from '/public/logos/postgresql.png'
import mongodbLogo from '/public/logos/mongodb.png'
import gitLogo from '/public/logos/git.png'
import djangoLogo from '/public/logos/django.png'
import htmlLogo from '/public/logos/html.png'
import cssLogo from '/public/logos/css.png'
import tailwindLogo from '/public/logos/tailwind.svg'
import bootstrapLogo from '/public/logos/bootstrap.png'
import cloudLogo from '/public/logos/cloud.png'
import illustratorLogo from '/public/logos/illustrator.png'
import indesignLogo from '/public/logos/indesign.png'
import premierLogo from '/public/logos/premier.png'
import photoshopLogo from '/public/logos/photoshop.png'
import './styles.css'

export default function Skills() {

  return (
    <>
        <div className="flex justify-center items-center pt-20 pb-20">
            <div className="grid grid-cols-5 gap-2">
                <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
                <img src={JavaScriptLogo} className="logo javascript" alt="JavaScript logo" />
                </a>
                <a href="https://www.python.org/doc/" target="_blank">
                <img src={pythonLogo} className="logo python" alt="Python logo" />
                </a>
                <a href="https://vitejs.dev" target="_blank">
                <img src={viteLogo} className="logo vite" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
                <a href="https://nodejs.org/en/learn/getting-started/introduction-to-nodejs" target="_blank">
                <img src={nodeLogo} className="logo node" alt="Node.js logo" />
                </a>
                <a href="https://expressjs.com/" target="_blank">
                <img src={expressLogo} className="logo express" alt="Express logo" />
                </a>
                <a href="https://jquery.com/" target="_blank">
                <img src={jQueryLogo} className="logo jquery" alt="jQuery logo" />
                </a>
                <a href="https://www.postgresql.org/docs/current/intro-whatis.html" target="_blank">
                <img src={postgresqlLogo} className="logo postgresql" alt="PostgreSQL logo" />
                </a>
                <a href="https://www.mongodb.com/docs/manual/" target="_blank">
                <img src={mongodbLogo} className="logo mongodb" alt="MongoDB logo" />
                </a>
                <a href="https://git-scm.com/about" target="_blank">
                <img src={gitLogo} className="logo git" alt="Git logo" />
                </a>
                <a href="https://docs.djangoproject.com/en/5.0/intro/overview/" target="_blank">
                <img src={djangoLogo} className="logo django" alt="dJango logo" />
                </a>
                <a href="https://developer.mozilla.org/en-US/docs/Glossary/HTML5" target="_blank">
                <img src={htmlLogo} className="logo html" alt="HTML5 logo" />
                </a>
                <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank">
                <img src={cssLogo} className="logo css" alt="CSS3 logo" />
                </a>
                <a href="https://v2.tailwindcss.com/docs" target="_blank">
                <img src={tailwindLogo} className="logo tailwind" alt="Tailwind CSS logo" />
                </a>
                <a href="https://getbootstrap.com/docs/4.1/getting-started/introduction/" target="_blank">
                <img src={bootstrapLogo} className="logo bootstrap" alt="Bootstrap logo" />
                </a>
                <a href="https://helpx.adobe.com/creative-cloud/user-guide.html" target="_blank">
                <img src={cloudLogo} className="logo cloud" alt="Cloud logo" />
                </a>
                <a href="https://helpx.adobe.com/illustrator/user-guide.html" target="_blank">
                <img src={illustratorLogo} className="logo illustrator" alt="Illustrator logo" />
                </a>
                <a href="https://helpx.adobe.com/indesign/user-guide.html" target="_blank">
                <img src={indesignLogo} className="logo indesign" alt="InDesign logo" />
                </a>
                <a href="https://helpx.adobe.com/premiere-pro/user-guide.html" target="_blank">
                <img src={premierLogo} className="logo premier" alt="Premier logo" />
                </a>
                <a href="https://helpx.adobe.com/photoshop/user-guide.html" target="_blank">
                <img src={photoshopLogo} className="logo photoshop" alt="Photoshop logo" />
                </a>
            </div>
        </div>
    </>
  )
}