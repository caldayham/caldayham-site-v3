import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img, ProjectSection } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const Projects = () => (
  <div>
  <Section>
<SectionDivider />
    <SectionTitle main> Projects</SectionTitle>
  </Section>
  <ProjectSection nopadding id="projects">
    <GridContainer>
      {projects.map(({id, image, title, description, tags, source, visit}) => (
        <BlogCard key={id}>
          <Img src={image} />
          <TitleContent>
            <HeaderThree title>{title}</HeaderThree>
            <Hr />
          </TitleContent>
          <CardInfo>{description}</CardInfo>
          <div>
            <TitleContent>Components</TitleContent>
            <TagList>
              {tags.map((tag, i) =>(
                <Tag key ={i}>{tag}</Tag>
              ))}
            </TagList>
          </div>
          <UtilityList>
<ExternalLinks href={visit}>Learn More</ExternalLinks>
<ExternalLinks href={visit}>Source</ExternalLinks>
          </UtilityList>
        </BlogCard>
      ))}
    </GridContainer>
    </ProjectSection>
    </div>
);

export default Projects;