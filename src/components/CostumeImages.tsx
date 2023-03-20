type CostumeImagesProps = {
    src: string;
    paddingTop: string;

}

// this gets exported to HeroSection
export default function CostumeImages(props: CostumeImagesProps) {
    return(
        <div className="custom-image" style={{paddingTop: props.paddingTop}}>
            <img src={props.src} alt="" />
        </div>
    )
}