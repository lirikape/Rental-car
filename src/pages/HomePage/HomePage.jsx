import {
  WrapperHero,
  WrapperTitle,
  Title,
  Span,
  ImageHero,
  WrapperBrandLogo,
  ImgBrandLogo,
  WrapperWhyChooseUs,
  ContentWhyChooseUs,
  ImgWhyChooseUs,
  TitleWhyChooseUs,
  SpanWhyChooseUs,
  ListWhyChooseUs,
  ItemWhyChooseUs,
  TitleItem,
  ArticleItem,
  IconsItem,
} from './HomePage.styled';


import Mazda from '../../images/mazda.png';
import Audi from '../../images/audi.png';
import Vw from '../../images/vw.png';
import Bmw from '../../images/bmw.png';
import Amg from '../../images/amg.png';
import Ford from '../../images/ford.png';
import Nissan from '../../images/nissan.png';
import ImageWhyChooseUs from '../../images/image-why-choose-us.png';
import Icons from '../../images/symbol-defs.svg';

function HomePage() {
  return (
    <>
      <WrapperHero>
        <WrapperTitle>
          <Title>
            Find, book, and rental car in <Span>Easy</Span> steps.
          </Title>
        </WrapperTitle>
        <ImageHero />
      </WrapperHero>
      <WrapperBrandLogo>
        <ImgBrandLogo src={Mazda} alt="Brand Logo Mazda" />
        <ImgBrandLogo src={Audi} alt="Brand Logo Audi" />
        <ImgBrandLogo src={Vw} alt="Brand Logo VW" />
        <ImgBrandLogo src={Bmw} alt="Brand Logo BMW" />
        <ImgBrandLogo src={Amg} alt="Brand Logo AMG" />
        <ImgBrandLogo src={Ford} alt="Brand Logo Ford" />
        <ImgBrandLogo src={Nissan} alt="Brand Logo Nissan" />
      </WrapperBrandLogo>
      <WrapperWhyChooseUs>
        <ImgWhyChooseUs>
          <img src={ImageWhyChooseUs} alt="Cars Map" width="610px" />
        </ImgWhyChooseUs>
        <ContentWhyChooseUs>
          <TitleWhyChooseUs>
            Why choose us
            <SpanWhyChooseUs>
              We offer the best experience with our rental deals
            </SpanWhyChooseUs>
          </TitleWhyChooseUs>
          <ListWhyChooseUs>
            <ItemWhyChooseUs>
              <IconsItem>
                <svg width="24" height="24" viewBox="0 0 24 24">
                  <use href={`${Icons}#icon-wallet`}></use>
                </svg>
              </IconsItem>
              <div>
                <TitleItem>Best price guaranteed</TitleItem>
                <ArticleItem>
                  Find a lower price? We’ll refund you 100% of the difference
                </ArticleItem>
              </div>
            </ItemWhyChooseUs>
            <ItemWhyChooseUs>
              <IconsItem>
                <svg width="24" height="24" viewBox="0 0 24 24">
                  <use href={`${Icons}#icon-profile`}></use>
                </svg>
              </IconsItem>
              <div>
                <TitleItem>Experience driver</TitleItem>
                <ArticleItem>
                  Don’t have a driver? Don’t worry, we have many experienced
                  driver for you.
                </ArticleItem>
              </div>
            </ItemWhyChooseUs>
            <ItemWhyChooseUs>
              <IconsItem>
                <svg width="24" height="24" viewBox="0 0 24 24">
                  <use href={`${Icons}#icon-bitcoin-refresh`}></use>
                </svg>
              </IconsItem>
              <div>
                <TitleItem>24-hour car delivery</TitleItem>
                <ArticleItem>
                  Book your car anytime and we will deliver it directly to you.
                </ArticleItem>
              </div>
            </ItemWhyChooseUs>
            <ItemWhyChooseUs>
              <IconsItem>
                <svg width="24" height="24" viewBox="0 0 24 24">
                  <use href={`${Icons}#icon-messages`}></use>
                </svg>
              </IconsItem>
              <div>
                <TitleItem>24/7 technical support</TitleItem>
                <ArticleItem>
                  Have a question? Contact Carentall support anytime when you
                  have problem.
                </ArticleItem>
              </div>
            </ItemWhyChooseUs>
          </ListWhyChooseUs>
        </ContentWhyChooseUs>
      </WrapperWhyChooseUs>
    </>
  );
}

export default HomePage;
