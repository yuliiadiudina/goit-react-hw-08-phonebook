import ContentLoader from 'react-content-loader';

export const Loader = () => {
  return (
    <div
      style={{
        marginLeft: 'auto',
        marginRight: 'auto',
      }}
    >
      <ContentLoader
        viewBox="0 0 400 160"
        height={160}
        width={400}
        backgroundColor="transparent"
      >
        <circle cx="150" cy="86" r="8" />
        <circle cx="194" cy="86" r="8" />
        <circle cx="238" cy="86" r="8" />
      </ContentLoader>
    </div>
  );
};

Loader.metadata = {
  name: 'RioF',
  github: 'clariokids',
  description: 'Three Dots',
  filename: 'ThreeDots',
};