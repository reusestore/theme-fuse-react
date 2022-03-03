import FuseExample from '@fuse/core/FuseExample';
import FuseHighlight from '@fuse/core/FuseHighlight';
import Button from '@mui/material/Button';
import Icon from '@mui/material/Icon';
import Typography from '@mui/material/Typography';
/* eslint import/no-webpack-loader-syntax: off */
/* eslint import/extensions: off */
/* eslint no-unused-vars: off */
/* eslint-disable jsx-a11y/accessible-emoji */

function SelectsDoc(props) {
  return (
    <>
      <div className="flex flex-1 grow-0 items-center justify-end">
        <Button
          className="normal-case"
          variant="contained"
          color="secondary"
          component="a"
          href="https://mui.com/components/selects"
          target="_blank"
          role="button"
        >
          <Icon>link</Icon>
          <span className="mx-4">Reference</span>
        </Button>
      </div>
      <Typography className="text-40 my-16 font-700" component="h1">
        Select
      </Typography>
      <Typography className="description">
        Select components are used for collecting user provided information from a list of options.
      </Typography>

      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Basic select
      </Typography>
      <Typography className="mb-40" component="div">
        Menus are positioned under their emitting elements, unless they are close to the bottom of
        the viewport.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="BasicSelect.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/selects/BasicSelect.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/selects/BasicSelect.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Advanced features
      </Typography>
      <Typography className="mb-40" component="div">
        The Select component is meant to be interchangeable with a native <code>{`<select>`}</code>{' '}
        element.
      </Typography>
      <Typography className="mb-40" component="div">
        If you are looking for more advanced features, like combobox, multiselect, autocomplete,
        async or creatable support, head to the{' '}
        <a href="/components/autocomplete/">
          <code>Autocomplete</code> component
        </a>
        . It&#39;s meant to be an improved version of the &quot;react-select&quot; and
        &quot;downshift&quot; packages.
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Props
      </Typography>
      <Typography className="mb-40" component="div">
        The Select component is implemented as a custom <code>{`<input>`}</code> element of the{' '}
        <a href="/api/input-base/">InputBase</a>. It extends the{' '}
        <a href="/components/text-fields/">text field components</a> sub-components, either the{' '}
        <a href="/api/outlined-input/">OutlinedInput</a>, <a href="/api/input/">Input</a>, or{' '}
        <a href="/api/filled-input/">FilledInput</a>, depending on the variant selected. It shares
        the same styles and many of the same props. Refer to the respective component&#39;s API page
        for details.
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        Filled and standard variants
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="SelectVariants.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/selects/SelectVariants.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/selects/SelectVariants.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        Labels and helper text
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="SelectLabels.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/selects/SelectLabels.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/selects/SelectLabels.js')}
        />
      </Typography>
      <blockquote>
        <Typography className="mb-40" component="div">
          ⚠ Note that when using FormControl with the outlined variant of the Select, you need to
          provide a label in two places: in the InputLabel component and in the <code>label</code>{' '}
          prop of the Select component (see the above demo).
        </Typography>
      </blockquote>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        Auto width
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="SelectAutoWidth.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/selects/SelectAutoWidth.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/selects/SelectAutoWidth.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        Other props
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="SelectOtherProps.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/selects/SelectOtherProps.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/selects/SelectOtherProps.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Native select
      </Typography>
      <Typography className="mb-40" component="div">
        As the user experience can be improved on mobile using the native select of the platform, we
        allow such pattern.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="NativeSelect.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/selects/NativeSelect.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/selects/NativeSelect.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        TextField
      </Typography>
      <Typography className="mb-40" component="div">
        The <code>TextField</code> wrapper component is a complete form control including a label,
        input and help text. You can find an example with the select mode{' '}
        <a href="/components/text-fields/#select">in this section</a>.
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Customization
      </Typography>
      <Typography className="mb-40" component="div">
        Here are some examples of customizing the component. You can learn more about this in the{' '}
        <a href="/customization/how-to-customize/">overrides documentation page</a>.
      </Typography>
      <Typography className="mb-40" component="div">
        The first step is to style the <code>InputBase</code> component. Once it&#39;s styled, you
        can either use it directly as a text field or provide it to the select <code>input</code>{' '}
        prop to have a <code>select</code> field. Notice that the <code>"standard"</code> variant is
        easier to customize, since it does not wrap the contents in a <code>fieldset</code>/
        <code>legend</code> markup.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="CustomizedSelects.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/selects/CustomizedSelects.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/selects/CustomizedSelects.js')}
        />
      </Typography>
      <Typography className="mb-40" component="div">
        🎨 If you are looking for inspiration, you can check{' '}
        <a href="https://mui-treasury.com/styles/select/">
          MUI Treasury&#39;s customization examples
        </a>
        .
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Multiple select
      </Typography>
      <Typography className="mb-40" component="div">
        The <code>Select</code> component can handle multiple selections. It&#39;s enabled with the{' '}
        <code>multiple</code> prop.
      </Typography>
      <Typography className="mb-40" component="div">
        Like with the single selection, you can pull out the new value by accessing{' '}
        <code>event.target.value</code> in the <code>onChange</code> callback. It&#39;s always an
        array.
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        Default
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="MultipleSelect.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/selects/MultipleSelect.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/selects/MultipleSelect.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        Checkmarks
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="MultipleSelectCheckmarks.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/selects/MultipleSelectCheckmarks.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/selects/MultipleSelectCheckmarks.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        Chip
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="MultipleSelectChip.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/selects/MultipleSelectChip.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/selects/MultipleSelectChip.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        Placeholder
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="MultipleSelectPlaceholder.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/selects/MultipleSelectPlaceholder.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/selects/MultipleSelectPlaceholder.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        Native
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="MultipleSelectNative.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/selects/MultipleSelectNative.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/selects/MultipleSelectNative.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Controlling the open state
      </Typography>
      <Typography className="mb-40" component="div">
        You can control the open state of the select with the <code>open</code> prop. Alternatively,
        it is also possible to set the initial (uncontrolled) open state of the component with the{' '}
        <code>defaultOpen</code> prop.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="ControlledOpenSelect.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/selects/ControlledOpenSelect.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/selects/ControlledOpenSelect.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        With a dialog
      </Typography>
      <Typography className="mb-40" component="div">
        While it&#39;s discouraged by the Material Design guidelines, you can use a select inside a
        dialog.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="DialogSelect.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/selects/DialogSelect.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/selects/DialogSelect.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Grouping
      </Typography>
      <Typography className="mb-40" component="div">
        Display categories with the <code>ListSubheader</code> component or the native{' '}
        <code>{`<optgroup>`}</code> element.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="GroupedSelect.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/selects/GroupedSelect.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/selects/GroupedSelect.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Accessibility
      </Typography>
      <Typography className="mb-40" component="div">
        To properly label your <code>Select</code> input you need an extra element with an{' '}
        <code>id</code> that contains a label. That <code>id</code> needs to match the{' '}
        <code>labelId</code> of the <code>Select</code> e.g.
      </Typography>

      <FuseHighlight component="pre" className="language-jsx">
        {` 
<InputLabel id="label">Age</InputLabel>
<Select labelId="label" id="select" value="20">
  <MenuItem value="10">Ten</MenuItem>
  <MenuItem value="20">Twenty</MenuItem>
</Select>
`}
      </FuseHighlight>
      <Typography className="mb-40" component="div">
        Alternatively a <code>TextField</code> with an <code>id</code> and <code>label</code>{' '}
        creates the proper markup and ids for you:
      </Typography>

      <FuseHighlight component="pre" className="language-jsx">
        {` 
<TextField id="select" label="Age" value="20" select>
  <MenuItem value="10">Ten</MenuItem>
  <MenuItem value="20">Twenty</MenuItem>
</TextField>
`}
      </FuseHighlight>
      <Typography className="mb-40" component="div">
        For a <a href="#native-select">native select</a>, you should mention a label by giving the
        value of the <code>id</code> attribute of the select element to the <code>InputLabel</code>
        &#39;s <code>htmlFor</code> attribute:
      </Typography>

      <FuseHighlight component="pre" className="language-jsx">
        {` 
<InputLabel htmlFor="select">Age</InputLabel>
<NativeSelect id="select">
  <option value="10">Ten</option>
  <option value="20">Twenty</option>
</NativeSelect>
`}
      </FuseHighlight>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Unstyled
      </Typography>
      <Typography className="mb-40" component="div">
        The Select also comes with an unstyled version. It&#39;s ideal for doing heavy
        customizations and minimizing bundle size.
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        Unstyled component
      </Typography>

      <FuseHighlight component="pre" className="language-jsx">
        {` 
import SelectUnstyled from '@mui/base/SelectUnstyled';
`}
      </FuseHighlight>
      <Typography className="text-16 mt-16 mb-10" component="h4">
        Basic usage
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="UnstyledSelectSimple.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/selects/UnstyledSelectSimple.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/selects/UnstyledSelectSimple.js')}
        />
      </Typography>
      <Typography className="mb-40" component="div">
        The <code>SelectUnstyled</code> is a component that accepts generic props. Due to Typescript
        limitations, this may cause unexpected behavior when wrapping the component in{' '}
        <code>forwardRef</code> (or other higher-order components). In such cases, the generic
        argument will be defaulted to <code>unknown</code> and type suggestions will be incomplete.
        To avoid this, manually cast the resulting component to the correct type (as shown above).
      </Typography>
      <Typography className="mb-40" component="div">
        The rest of the demos below will not use <code>forwardRef</code> for brevity.
      </Typography>
      <Typography className="text-16 mt-16 mb-10" component="h4">
        Controlled select
      </Typography>
      <Typography className="mb-40" component="div">
        The SelectUnstyled can be used as either uncontrolled (as shown in the demo above) or
        controlled component.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="UnstyledSelectControlled.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/selects/UnstyledSelectControlled.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/selects/UnstyledSelectControlled.js')}
        />
      </Typography>
      <Typography className="text-16 mt-16 mb-10" component="h4">
        Usage with object values
      </Typography>
      <Typography className="mb-40" component="div">
        The unstyled select may be used with non-string values.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="UnstyledSelectObjectValues.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/selects/UnstyledSelectObjectValues.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/selects/UnstyledSelectObjectValues.js')}
        />
      </Typography>
      <Typography className="text-16 mt-16 mb-10" component="h4">
        Customizing the selected value appearance
      </Typography>
      <Typography className="mb-40" component="div">
        It is possible to customize the selected value display by providing a function to the{' '}
        <code>renderValue</code> prop. The element returned by this function will be rendered inside
        the select&#39;s button.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="UnstyledSelectCustomRenderValue.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/selects/UnstyledSelectCustomRenderValue.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/selects/UnstyledSelectCustomRenderValue.js')}
        />
      </Typography>
      <Typography className="text-16 mt-16 mb-10" component="h4">
        Customizing the options&#39; appearance
      </Typography>
      <Typography className="mb-40" component="div">
        Options don&#39;t have to be plain strings. You can include custom elements to be rendered
        inside the listbox.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="UnstyledSelectRichOptions.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/selects/UnstyledSelectRichOptions.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/selects/UnstyledSelectRichOptions.js')}
        />
      </Typography>
      <Typography className="text-16 mt-16 mb-10" component="h4">
        Grouping
      </Typography>
      <Typography className="mb-40" component="div">
        Options can be grouped, similarly to the how the native <code>select</code> element works.
        Unlike the native <code>select</code>, however, the groups can be nested.
      </Typography>
      <Typography className="mb-40" component="div">
        Place the <code>Option</code> components inside <code>OptionGroup</code> to achieve this.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="UnstyledSelectGrouping.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/selects/UnstyledSelectGrouping.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/selects/UnstyledSelectGrouping.js')}
        />
      </Typography>
      <Typography className="text-16 mt-16 mb-10" component="h4">
        Multiselect
      </Typography>
      <Typography className="mb-40" component="div">
        To be able to select multiple options at once, use the <code>MultiSelectUnstyled</code>{' '}
        component.
      </Typography>

      <FuseHighlight component="pre" className="language-js">
        {` 
import { MultiSelectUnstyled } from '@mui/base/SelectUnstyled';
`}
      </FuseHighlight>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="UnstyledSelectMultiple.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/selects/UnstyledSelectMultiple.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/selects/UnstyledSelectMultiple.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        useSelect hook
      </Typography>

      <FuseHighlight component="pre" className="language-js">
        {` 
import { useSelect } from '@mui/base/SelectUnstyled';
`}
      </FuseHighlight>
      <Typography className="mb-40" component="div">
        If you need to use Select&#39;s functionality in another component, you can use the{' '}
        <code>useSelect</code> hook. It enables maximal customizability at the cost of being
        low-level.
      </Typography>
      <Typography className="mb-40" component="div">
        The following example shows a select that opens when hovered over or focused. It can be
        controlled by a mouse/touch or a keyboard.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="UseSelect.js"
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/selects/UseSelect.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/selects/UseSelect.js')}
        />
      </Typography>
    </>
  );
}

export default SelectsDoc;
