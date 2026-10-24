import { useEffect, useState } from 'react';
import Icon from './Icon';

// Copies `text`. If the Clipboard API is missing or refused, it selects the element
// with id `selectId` instead, so the visitor can copy it by hand.
export default function CopyButton({ text, label = 'Copy', selectId }) {
  const [state, setState] = useState('idle');
  const [note, setNote] = useState('');

  useEffect(() => {
    if (state !== 'copied') return undefined;
    const t = setTimeout(() => setState('idle'), 1800);
    return () => clearTimeout(t);
  }, [state]);

  // Empty the live region, then fill it on a later frame, so a repeated result is read again.
  const announce = (msg) => {
    setNote('');
    setTimeout(() => setNote(msg), 100);
  };

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setState('copied');
      announce('Email address copied');
    } catch {
      const el = selectId && document.getElementById(selectId);
      if (el) window.getSelection()?.selectAllChildren(el);
      setState('failed');
      announce(`Could not copy. The address is ${text}`);
    }
  };

  return (
    <>
      <button type="button" className="btn" onClick={copy}>
        <Icon name={state === 'copied' ? 'check' : 'copy'} />
        <span>{state === 'copied' ? 'Copied' : state === 'failed' ? 'Selected, copy it' : label}</span>
      </button>
      <span className="sr-only" role="status">
        {note}
      </span>
    </>
  );
}
