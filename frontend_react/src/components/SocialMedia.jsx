import { BsLinkedin, BsGithub} from 'react-icons/bs'

const SocialMedia = () => {
    return <div className="app__social">
        <div>
            <a href="https://www.linkedin.com/in/kate-bk-kim/" target="blank">
                 <BsLinkedin/>
            </a>
           
        </div>
        <div>
        <a href="https://github.com/bkkate" target="blank">
            <BsGithub/>
            </a>
        </div>
    </div>
}

export default SocialMedia;