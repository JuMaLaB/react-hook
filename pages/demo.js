import DemoApp from "../src/components/misc/demoApp";
import { useEffect, useState } from "react";

const localStateValues = [];
let localStateValueIndex = 0;
export default function Demo() {
  function useMyState(initial) {
    const localStateValueIndexLocal = localStateValueIndex; // closure
    if (localStateValues[localStateValueIndexLocal] === undefined) {
      localStateValues[localStateValueIndexLocal] = initial;
    }
    const setValue = (val) => {
      localStateValues[localStateValueIndexLocal] = val;
      reRenderMe();
    };
    localStateValueIndex++; // update global
    const retVals = [localStateValues[localStateValueIndexLocal], setValue];
    return retVals;
  }
  const [cnt, setCnt] = useState(0);

  // used to force re-render
  useEffect(() => {
    console.log("rendering...");
  }, [cnt]);
  function reRenderMe() {
    setCnt(cnt + 1);
    console.log("reRenderMe called...");
  }

  // needed to ensure that this index is set to 0 after render again => unmount/mount
  localStateValueIndex = 0;
  return <DemoApp useState={useMyState} />;
}
