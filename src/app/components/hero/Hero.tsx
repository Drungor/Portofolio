
import Button from '../Button';


interface HeroProps {
  id?: string;
}



const Hero = ({ id }: HeroProps) => {
  const classNameMarginBottom = 'mb-4 sm:mb-8';


  return (
    <>
      <section className="text-3xl md:text-5xl">
        <p className={classNameMarginBottom}>こんにちは！ &#128075;</p>
        <h1 className={classNameMarginBottom}>レオポルドと申します。</h1>
        <p className={classNameMarginBottom}>福岡でバックエンドエンジニアとして働いています。</p>
        <p className={`text-li dark:text-impact ${classNameMarginBottom}`}>サイドプロジェクトを探しています。どうぞよろしくお願いいたします。</p>
      </section>
      <section id="SNS" className=" flex md:mb-12">
        <Button noLeftMargin className=" p-1 group ">

          <a href="https://github.com/Drungor" target="_blank">
            <svg
              aria-hidden="true"
              className="octicon octicon-mark-github group-hover:fill-li300 dark:group-hover:fill-impact300 fill-li dark:fill-impact"
              height="36"
              version="1.1"
              viewBox="0 0 16 16"
              width="36"
            >
              <path
                fillRule="evenodd"
                d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
            </svg></a>
        </Button>
        <Button className="group">
          <a
            href="mailto:leopold.mtr@outlook.com?subject=Hello">
            <svg
              width="46px"
              height="46px"
              viewBox="0 0 24.00 24.00"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#000000"
              strokeWidth="0.00024000000000000003">
              <g
                id="SVGRepo_bgCarrier"
                strokeWidth="0">
              </g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round">
              </g>
              <g
                id="SVGRepo_iconCarrier">
                <path
                  d="M2.99946 7.51126C2.09768 8.08885 1.5 9.09963 1.5 10.25V16.25C1.5 19.1495 3.85051 21.5 6.75 21.5H15.75C16.9004 21.5 17.9112 20.9023 18.4887 20.0005L6.75 20C4.67893 20 3 18.3211 3 16.25L2.99946 7.51126ZM18.75 4H7.25C5.51697 4 4.10075 5.35645 4.00514 7.06558L4 7.25V15.75C4 17.483 5.35645 18.8992 7.06558 18.9949L7.25 19H18.75C20.483 19 21.8992 17.6435 21.9949 15.9344L22 15.75V7.25C22 5.51697 20.6435 4.10075 18.9344 4.00514L18.75 4ZM5.5 8.899L12.6507 12.6637C12.8381 12.7623 13.0569 12.7764 13.2532 12.706L13.3493 12.6637L20.5 8.9V15.75C20.5 16.6682 19.7929 17.4212 18.8935 17.4942L18.75 17.5H7.25C6.33183 17.5 5.57881 16.7929 5.5058 15.8935L5.5 15.75V8.899ZM7.25 5.5H18.75C19.6682 5.5 20.4212 6.20711 20.4942 7.10647L20.498 7.206L13 11.1525L5.50057 7.20483C5.52453 6.25921 6.2986 5.5 7.25 5.5Z"
                  className="dark:group-hover:fill-impact300 group-hover:fill-li300 fill-li dark:fill-impact" >
                </path>
              </g>
            </svg>
          </a>
        </Button>
      </section>
    </>
  )
}

export default Hero;