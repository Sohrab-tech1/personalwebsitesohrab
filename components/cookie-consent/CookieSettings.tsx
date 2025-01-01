'use client'

import { useState } from 'react'
import { Switch, Button, Label } from '@/components/ui'
import { motion } from 'framer-motion'
import { Shield, LineChart, Target } from 'lucide-react'

interface CookieSettings {
  necessary: boolean
  analytics: boolean
  marketing: boolean
}

interface CookieSettingsProps {
  initialSettings: CookieSettings
  onSave: (settings: CookieSettings) => void
  onCancel: () => void
  hasConsent?: boolean
}

export function CookieSettings({ 
  initialSettings, 
  onSave, 
  onCancel,
  hasConsent = false 
}: CookieSettingsProps) {
  const [settings, setSettings] = useState<CookieSettings>(initialSettings)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="space-y-6"
    >
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          {hasConsent ? 'Manage Cookie Settings' : 'Cookie Settings'}
        </h3>
        <p className="text-sm text-gray-500 mb-6">
          {hasConsent 
            ? 'Adjust your cookie preferences below. Your choices will be saved automatically.'
            : 'Choose which cookies you want to accept. Your choice will be saved for one year.'}
        </p>
        <div className="space-y-6">
          <div className="flex items-start space-x-4">
            <div className="mt-1">
              <Shield className="h-6 w-6 text-green-500" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="necessary" className="text-sm font-medium text-gray-900">
                    Essential Cookies
                  </Label>
                  <p className="text-sm text-gray-500 mt-1">
                    Required for the website to function properly. Cannot be disabled.
                  </p>
                </div>
                <Switch
                  id="necessary"
                  checked={true}
                  disabled
                  className="ml-4"
                />
              </div>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="mt-1">
              <LineChart className="h-6 w-6 text-blue-500" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="analytics" className="text-sm font-medium text-gray-900">
                    Analytics Cookies
                  </Label>
                  <p className="text-sm text-gray-500 mt-1">
                    Help us understand how visitors interact with our website.
                  </p>
                </div>
                <Switch
                  id="analytics"
                  checked={settings.analytics}
                  onCheckedChange={(checked: boolean) => 
                    setSettings((prev) => ({ ...prev, analytics: checked }))
                  }
                  className="ml-4"
                />
              </div>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="mt-1">
              <Target className="h-6 w-6 text-purple-500" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="marketing" className="text-sm font-medium text-gray-900">
                    Marketing Cookies
                  </Label>
                  <p className="text-sm text-gray-500 mt-1">
                    Used to deliver personalized advertisements and content.
                  </p>
                </div>
                <Switch
                  id="marketing"
                  checked={settings.marketing}
                  onCheckedChange={(checked: boolean) => 
                    setSettings((prev) => ({ ...prev, marketing: checked }))
                  }
                  className="ml-4"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-end gap-3 pt-4 border-t border-gray-200">
        <Button
          variant="outline"
          onClick={onCancel}
          className="border-gray-300 text-gray-700 hover:bg-gray-50"
        >
          {hasConsent ? 'Close' : 'Cancel'}
        </Button>
        <Button
          onClick={() => onSave(settings)}
          className="bg-blue-600 text-white hover:bg-blue-700"
        >
          {hasConsent ? 'Update Preferences' : 'Save Preferences'}
        </Button>
      </div>
    </motion.div>
  )
} 