import { useState } from 'react'
import { Button, Form, H2, H3, Input, YStack } from 'tamagui'

export default function TabOneScreen() {

  const [value, setValue] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  return (
    <YStack f={1} ai="center" gap="$8" px="$10" pt="$5" bg="$background">
      <H2>Button Form Repro</H2>

      <Form gap="$2" onSubmit={() => alert("Form submitted event")}>
        <H3>Broken Form</H3>
        <Input
          placeholder="Password"
          secureTextEntry={!showPassword}
          blurOnSubmit={false}
          value={value}
          onChangeText={setValue}
        />
        <Button onPress={() => setShowPassword(v => !v)}>
          Toggle password visibility
        </Button>

        <Form.Trigger mt="$2" asChild>
          <Button>Submit</Button>
        </Form.Trigger>
      </Form>

      <Form gap="$2" onSubmit={() => alert("Form submitted event")}>
        <H3>Expected Behavior</H3>
        <Input
          placeholder="Password"
          secureTextEntry={!showPassword}
          blurOnSubmit={false}
          value={value}
          onChangeText={setValue}
        />
        {/** @ts-expect-error providing html attribute */}
        <Button type="button" onPress={() => setShowPassword(v => !v)}>
          Toggle password visibility
        </Button>

        <Form.Trigger mt="$2" asChild>
          <Button>Submit</Button>
        </Form.Trigger>
      </Form>

    </YStack>
  )
}
