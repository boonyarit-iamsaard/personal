import * as React from 'react';
import * as runtime from 'react/jsx-runtime';
import Image from 'next/image';

type MDXContentProps = {
  code: string;
  components?: Record<string, React.ComponentType>;
};

type MDXProps = {
  code: string;
};

const useMDXComponent = (code: string) => {
  const fn = new Function(code);
  return fn({ ...runtime }).default;
};

// TODO: add more components here
const components = {};

export function MDXContent({ code, components }: MDXContentProps) {
  const Component = useMDXComponent(code);
  return <Component components={{ Image, ...components }} />;
}

export function Mdx({ code }: MDXProps) {
  const Component = useMDXComponent(code);

  return (
    <div className="mdx">
      <Component components={components} />
    </div>
  );
}
