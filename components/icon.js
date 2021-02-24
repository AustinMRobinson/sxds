const icons = {
    'menu': 'M21 6.25H3V4.75H21V6.25ZM21 19.25H3V17.75H21V19.25ZM3 12.75H21V11.25H3V12.75Z" fill="white',
    'sun': 'M12.75 2V5.5H11.25V2H12.75ZM12 15.5C13.933 15.5 15.5 13.933 15.5 12C15.5 10.067 13.933 8.5 12 8.5C10.067 8.5 8.5 10.067 8.5 12C8.5 13.933 10.067 15.5 12 15.5ZM12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17ZM18.5 12.75H22V11.25H18.5V12.75ZM11.25 22V18.5H12.75V22H11.25ZM5.5 11.25H2V12.75H5.5L5.5 11.25ZM19.6014 5.45929L17.1265 7.93416L16.0659 6.8735L18.5407 4.39862L19.6014 5.45929ZM16.0659 17.1265L18.5407 19.6014L19.6014 18.5407L17.1265 16.0658L16.0659 17.1265ZM4.39859 18.5407L6.87347 16.0658L7.93413 17.1265L5.45925 19.6014L4.39859 18.5407ZM7.93413 6.8735L5.45925 4.39863L4.39859 5.45929L6.87347 7.93416L7.93413 6.8735Z',
};

const Icon = (props) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill="currentcolor" d={icons[props.icon]} fill-rule="evenodd" clip-rule="evenodd" />
    </svg>
)

export default Icon

