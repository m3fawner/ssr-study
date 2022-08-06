import {
  useEffect, useState, useRef, ComponentType, ReactElement,
} from 'react';

type ReactComponentModule<T> = {
  default: ComponentType<T>
};
export type LoaderFunction<T> = () => Promise<ReactComponentModule<T>>;
type DynamicallyImportedProps<T> = {
  loader: LoaderFunction<T>,
  componentProps: T
};
// eslint-disable-next-line react/function-component-definition
function DynamicallyImported<T>({ loader, componentProps }: DynamicallyImportedProps<T>): ReactElement {
  const componentRef = useRef<ReactComponentModule<T>['default']|null>(null);
  const [isLoaded, setLoaded] = useState(false);
  useEffect(() => {
    (async () => {
      try {
        const result = await loader();
        componentRef.current = result.default; // Components cannot be set in state
        setLoaded(true); // must force a re-render
      } catch (e) {
        // We don't care about failed dynamic modules yet
      }
    })();
  }, []);
  const Component: ComponentType<T> | null = componentRef.current;
  return isLoaded && Component !== null ? <Component {...componentProps} /> : <div />;
}

export default DynamicallyImported;
