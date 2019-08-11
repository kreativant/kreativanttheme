<?php
defined('TYPO3_MODE') or die();

$extConfig = unserialize($GLOBALS['TYPO3_CONF_VARS']['EXT']['extConf']['kreativanttheme']);

/***************
 * Default TsConfig
 */
TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addPageTSConfig('<INCLUDE_TYPOSCRIPT: source="FILE:EXT:' . $_EXTKEY . '/Configuration/PageTS/PageTS.ts">');

