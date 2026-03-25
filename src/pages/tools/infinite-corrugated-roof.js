import React from 'react';
import tools from '@site/src/data/tools';
import ToolPageDispatcher from '@site/src/components/Tools/ToolPageDispatcher';

export default function InfiniteCorrugatedRoofPage() {
  const tool = tools.find(t => t.id === 'infinite-corrugated-roof');
  return <ToolPageDispatcher tool={tool} />;
}
